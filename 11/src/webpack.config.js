const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
  deServer: {
    contentBase: './dist',
  },
  plugins:{
      new HtmlWebpackPlugin({
          template:'./src/index.html',
      }),
  },
};
