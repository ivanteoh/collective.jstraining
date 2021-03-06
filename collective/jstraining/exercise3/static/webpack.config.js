var webpack = require('webpack');
var path = require('path');

// Webpack Config
module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'exercise3-compiled.min.js'
  },
  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: [
      // .ts files for TypeScript
      { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] }
    ]
  },
  watch: true
};
module.exports = {
  entry: {
    app: './main.css'
  },
  output: {
    filename: 'exercise3-compiled.css'
  },
  watch: true
};

