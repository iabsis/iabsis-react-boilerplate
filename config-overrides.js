/*
    For more information on how customize-cra works check out its official github repo at:
    https://github.com/arackaf/customize-cra
  */

const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        '@components': './src/components',
        '@pages': './src/pages',
      },
    },
  ]),
);
