const path = require('path');

module.exports = {
  mode: 'production',
  entry: './client/Search.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
        },
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6'],
  },
};
