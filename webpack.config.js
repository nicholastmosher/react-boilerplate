let path = require('path');

let APP_DIR = path.resolve(__dirname, 'src');
let BUILD_DIR = path.resolve(__dirname, 'public');

let config = {
  entry: [
    APP_DIR + '/js/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        use: [{
          loader: 'babel-loader',
          options: { presets: [ 'es2015', 'react', 'stage-2' ]},
        }],
      },
    ]
  },
  plugins: [ ],
  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;
