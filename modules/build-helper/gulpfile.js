const del = require('del')
const { resolve, basename } = require('path')
const { src, dest, parallel, series, watch } = require('gulp')
const { writeFile, mkdir, unlink, copyFile } = require('fs').promises
const zip = require('gulp-zip')

function get_paths(directory) {
  return {
    build: resolve(directory, `.dist`, basename(directory)),
    output: resolve(directory, `.dist`),
    archive: `${basename(directory)}.zip`,
    package: {
      current: resolve(directory, `package.json`),
      build: resolve(directory, `.dist`, basename(directory), `package.json`)
    },
    source: resolve(directory),
    wip_file: resolve(directory, `.dist`, `.wip`),
    checksum: resolve(directory, `.dist`, `checksum.json`)
  }
}


const path = get_paths(__dirname)

async function clear_dist() {
  await del(path.output)
  await mkdir(path.output)
  await mkdir(path.build)
}

async function copy() {
  return copyFile(resolve(path.source, `main.js`), resolve(path.build, `main.js`))
}

async function convert_package() {
  const package = require(path.package.current)
  package.main = package.main.replace(/\.ts/, `.js`)
  package.scripts.serve = package.scripts.serve.replace(/^ts-node/, `node`).replace(/\.ts/, `.js`)
  await writeFile(path.package.build, JSON.stringify(package, null, 2))
}

async function archive() {
  return src(`${path.build}/**`)
    .pipe(zip(`${path.archive}`))
    .pipe(dest(path.output))
}

async function set_wip_file() {
  return writeFile(path.wip_file, ``)
}

async function unset_wip_file() {
  return unlink(path.wip_file)
}

async function build() {
  console.log(`─ COPYING: (always) build-helper`)
  await new Promise(ok => series(
    clear_dist,
    set_wip_file,
    parallel(copy, convert_package),
    archive,
    unset_wip_file,
  )(ok))
}

async function force_build() {
  console.log(`─ COPYING: (always) build-helper`)
  await new Promise(ok => series(
    clear_dist,
    set_wip_file,
    parallel(copy, convert_package),
    archive,
    unset_wip_file,
  )(ok))
}

exports.default = build
exports.build = build
exports.force_build = force_build
exports.watch = () => watch(
  [`**/*.js`, `**/*.ts`, `package.json`, `!node_modules/**`, `!**/node_modules/**`],
  {
    followSymlinks: false,
    cwd: path.source,
    ignorePermissionErrors: true,
  },
  async () => {
    let loop = true
    while (loop) {
      await new Promise(ok => setTimeout(ok, 5000))
      await force_build()
    }
  }
)