var path = require('path');
var modules = require('./webpack.modules.js');
var server = require('./webpack/webpack.server.js');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'subroutine.js'),
	module: modules,
	resolve: {
		extensions: ['.js'],
		modules: ['src', 'node_modules', path.resolve(__dirname)],
		alias: {
			'@src': path.resolve('./src'),
			'@core': path.resolve('./src/core'),
			'@lib': path.resolve('./src/lib'),
			'@rooms': path.resolve('./src/rooms'),
			'@client': path.resolve('./src/client')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/app')
	},
	devServer: {
		contentBase: path.join(__dirname, 'res'),
		compress: true,
		port: 8000,
		overlay: true, // show build errors
		hot: true, // enable HMR
		disableHostCheck: true, // Chrome security
		before: server
	}
};
