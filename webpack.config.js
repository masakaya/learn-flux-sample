const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/browser.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.sass', '.scss', '.css'],
  },
  output: {
    filename: 'browser.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    hot: true,
    open: true,
    port: 3000,
  },
};
