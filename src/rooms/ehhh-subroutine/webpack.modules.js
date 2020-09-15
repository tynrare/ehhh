var path = require('path');

module.exports = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}
	]
};
