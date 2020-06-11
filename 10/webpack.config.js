module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: `${_dirname}/dist`,
  },
  devServer: {
    contentBase: './dist',
  },
};
