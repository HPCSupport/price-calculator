const { make_buildfile } = require('@asset-vector/build-helper')

const { build, force_build, watch } = make_buildfile(
  __dirname,
  {
    target: `es2015`,
    module: `CommonJS`,
    declaration: true,
    moduleResolution: `node`,
    downlevelIteration: true,
  },
  src => [`${src}/src/**/*.ts`, `${src}/main.ts`, `!${src}/**/*.spec.*`]
)

exports.default = build
exports.build = build
exports.force_build = force_build
exports.watch = watch
