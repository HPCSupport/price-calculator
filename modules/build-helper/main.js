const del = require('del')
const { resolve, basename } = require('path')
const { src, dest, parallel, series, watch } = require('gulp')
const { writeFile, mkdir, unlink } = require('fs').promises
const { existsSync } = require('fs')
const zip = require('gulp-zip')
const babel = require('gulp-babel')
const babel_typescript = require('@babel/preset-typescript')
const babel_preset_env = require('@babel/preset-env')
const { readFile } = require('fs').promises
const through = require('through2');
const ts = require('gulp-typescript')
function get_paths(directory) {
  const name = basename(directory)
  return {
    build: resolve(directory, `.dist`, name),
    output: resolve(directory, `.dist`),
    archive: `${name}.zip`,
    package: {
      current: resolve(directory, `package.json`),
      build: resolve(directory, `.dist`, name, `package.json`)
    },
    source: resolve(directory),
    wip_file: resolve(directory, `.dist`, `.wip`),
    name: `${name}`,
    checksum: resolve(directory, `.dist`, `checksum.json`)
  }
}

async function compare_checksum(files, cwd, comparison) {
  const hash = data => require('crypto').createHash(`sha512`).update(data).digest(`hex`)

  const checksum = check => {
    return through.obj(function (file, _, next) {
      if (!file.isDirectory()) {
        const hash = require('crypto').createHash(`sha512`)
        hash.update(file.contents)

        const path = `.` + file.path.replace(file.cwd, ``).replace(/\/|\\/g, `/`)
        check(path, hash.digest(`hex`))
      }
      next()
    })
  }

  let previous

  try {
    previous = JSON.parse(await readFile(comparison, `utf8`)) || {}
  }
  catch {
    previous = {}
  }

  const current = {}
  let match = true
  const check_and_assign = (key, hash) => {
    if (match && !previous[key] || previous[key] !== hash) match = false
    current[key] = hash
  }

  await new Promise(ok =>
    src(files, { cwd })
      .pipe(checksum(check_and_assign))
      .on(`readable`, ok)
  )

  if (match) {
    for (const key of Object.keys(previous)) {
      if (current[key]) continue
      match = false
      break
    }
  }

  return { match, hash: JSON.stringify(current, undefined, 2), version: hash(JSON.stringify(current)) }
}



function make_buildfile(directory, tsconfig, typescript_files) {
  const path = get_paths(directory)

  async function clear_dist() {
    await del(path.output)
    await mkdir(path.output)
    await mkdir(path.build)
  }

  function compile() {
    return src(typescript_files(path.source), { base: path.source })
      // .pipe(babel({
      //   presets: [
      //     babel_typescript,
      //     [babel_preset_env, {
      //       targets: {
      //         node: true
      //       }
      //     }]
      //   ]
      // }))
      .pipe(ts(tsconfig))
      .pipe(dest(`${path.build}/`))
  }

  async function convert_package() {
    const package = require(path.package.current)
    package.main = package.main.replace(/\.ts/, `.js`)
    package.scripts.serve = package.scripts.serve.replace(/^ts-node/, `node`).replace(/\.ts/, `.js`)
    await writeFile(path.package.build, JSON.stringify(package, null, 2))
  }

  async function set_wip_file() {
    return writeFile(path.wip_file, ``)
  }

  async function unset_wip_file() {
    return unlink(path.wip_file)
  }

  async function archive() {
    return src(`${path.build}/**`)
      .pipe(zip(`${path.archive}`))
      .pipe(dest(path.output))
  }

  async function make(hash) {
    console.log(`─ COMPILING: ${path.name}`)
    return await new Promise(ok => series(
      clear_dist,
      set_wip_file,
      parallel(compile, convert_package),
      archive,
      () => writeFile(path.checksum, hash),
      unset_wip_file,
    )(ok))
  }

  const task = {
    [`Build: ${path.name}`]: async () => {

      const { match, hash } = await compare_checksum(typescript_files(path.source), path.source, path.checksum)

      if (match) {
        console.info(`─ SKIPPED: ${path.name} not compiled as there were no changes.`)
        return
      }

      else {
        await make(hash)
      }
    },
    [`Force build: ${path.name}`]: async () => {

      const { _, hash } = await compare_checksum(typescript_files(path.source), path.source, path.checksum)

      await make(hash)
    },
    [`Watch: ${path.name}`]: () =>
      watch(
        [`**/*.ts`, `**/*.js`, `package.json`, `!.dist/**`, `!**/node_modules/**`],
        {
          followSymlinks: false,
          cwd: path.source,
          ignorePermissionErrors: true,
        },
        async () => {
          let loop = true
          while (loop) {
            await new Promise(ok => setTimeout(ok, 5000))
            await make()
          }
        }
      )
  }


  return { clear_dist, compile, convert_package, archive, build: task[`Build: ${path.name}`], force_build: task[`Force build: ${path.name}`], watch: task[`Watch: ${path.name}`] }
}

exports.make_buildfile = make_buildfile

exports.compare_checksum = compare_checksum