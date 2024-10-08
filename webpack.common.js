const webpack = require('webpack');
const path = require('path');
const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
  entry: './src/js/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    watchFiles: ['src/*.html'],
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    port: 9000,
    compress: true,
  },
  plugins: [
    new GoogleFontsPlugin({
      fonts: [{ family: 'Poppins', variants: ['300', '400', '500', '600'] }],

      // Add more fonts if needed
      local: false, // Use Google fonts CDN instead of downloading
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(svg|jpg|png)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
