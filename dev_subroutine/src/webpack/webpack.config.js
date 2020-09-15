var path = require('path');
var modules = require('./webpack.modules.js');

// #code-debt
const root = path.resolve(process.cwd(), '..');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	module: modules,
	resolve: {
		extensions: ['.js'],
		modules: [root, 'src', 'node_modules'],
		alias: {
			'@src': path.join(root, 'src'),
			'@core': path.join(root, 'src/framework/core'),
			'@lib': path.join(root, 'src/framework/lib'),
			'@rooms': path.join(root, 'src/rooms'),
			'@client': path.join(root, 'src/framework/client')
		}
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(process.cwd(), 'dest/app')
	}
};
