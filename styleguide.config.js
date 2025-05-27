module.exports = {
  assetsDir: '/styleguide/',
  exampleMode: 'expand',
  tocMode: 'expand',
  usageMode: 'expand',
  require: [
    'bootstrap/scss/bootstrap-utilities.scss',
    'bootstrap/scss/bootstrap-reboot.scss',
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(jsx|tsx)?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css?$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(scss|sass)?$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  // 抑制废弃警告
                  quietDeps: true,
                  silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json',
    {
      shouldRemoveUndefinedFromOptional: true,
    },
  ).parse,
};
