var path = require('path');

module.exports = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		// all files with hxml extension will be handled by `haxe-loader`
		{
			test: /\.hxml$/,
			loader: 'haxe-loader',
			options: {
				debug: true
			}
		},
		{
			test: /\.md$/,
			use: [
				{
					loader: path.resolve(__dirname, './webpack/md-loader.js')
				}
			]
		}
	]
};
