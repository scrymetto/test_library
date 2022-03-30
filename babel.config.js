module.exports = (api) => {
  api.cache(true);

  return {
    presets: [[
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
      '@babel/preset-flow',
    ],
    plugins: [['@babel/plugin-transform-runtime']],
    ignore: [/core-js/, /@babel\/runtime/],
    comments: true,
  };
};
