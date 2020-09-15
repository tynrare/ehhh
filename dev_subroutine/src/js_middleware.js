const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');

/**
 *
 */
module.exports = function () {
	const compiler = webpack({
		mode: 'development',
		publicPath: './src'
	});

	return middleware(compiler, { writeToDisk: true, publicPath: './' });
};
