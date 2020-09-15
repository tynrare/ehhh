var path = require('path');
var modules = require('./webpack.modules.js');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	module: modules,
	resolve: {
		extensions: ['.js'],
		modules: ['src', 'node_modules', path.resolve(__dirname)],
		alias: {
			'@src': path.resolve('./src'),
			'@core': path.resolve('./src/framework/core'),
			'@lib': path.resolve('./src/framework/lib'),
			'@rooms': path.resolve('./src/rooms'),
			'@client': path.resolve('./src/framework/client')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(process.cwd(), 'dest/app')
	}
};
