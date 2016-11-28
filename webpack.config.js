var webpack = require('webpack');
var path = require('path');

var config = {
  context: __dirname + '/project',
  entry: [
		'webpack/hot/dev-server',
		'./index.js'
  ],
  output: {
    path: __dirname + "project",
    publicPath: "/project",
    filename: "bundle.js"
  },
  devServer: {
		inline: true,
		contentBase: '/project',
		port: 3000
	}
};

module.exports = config;
