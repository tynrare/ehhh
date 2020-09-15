/**
 * https://github.com/emberfeather/less.js-middleware/tree/master/lib
 */

const path = require('path');
const webpack = require('webpack');
const compiler = webpack({
  // webpack options
});
const middleware = require('webpack-dev-middleware');

const { getEhhhRootPath } = require('../src/ehhh.js');

const regexs = {
	js: /\.js(\.map)?$/,
	sourcemap: /\.js\.map$/
};

const defaults = {
	dest: '/dest',
	source: '/src'
};

/**
 * @param {string} pathname .
 * @param {Object} opts .
 *
 * @returns {Promise<Object>}
 */
function compile(pathname, opts = {}) {
	const options = Object.assign(defaults, opts);

	return new Promise((resolve, reject) => {
		const sourcePath = path.join(getEhhhRootPath(), options.source, pathname);
		const destPath = path.join(getEhhhRootPath(), options.dest, pathname);

		console.log(`compile .js on path ${sourcePath} into dest ${destPath}`);

		const compiler = webpack({
			entry: sourcePath,
			output: {
				filename: pathname,
				path: path.join(getEhhhRootPath(), options.dest)
			},
			resolve: {
				extensions: ['.js']
			}
		});

		compiler.run((err, stats) => {
			if (err || stats.hasErrors()) {
				console.error(err);
				reject(err);
			}

			console.log(stats);
			resolve(stats);
		});
	});
}

function jsMiddleware(options = {}) {
	return function (req, res, next) {
		if ('GET' != req.method.toUpperCase() && 'HEAD' != req.method.toUpperCase()) {
			return next();
		}

		let pathname = url.parse(req.url).pathname;

		// Only handle the matching files in this middleware.
		if (!regexs.js.test(pathname)) {
			return next();
		}

		if (regexs.sourcemap.test(pathname)) {
			pathname = pathname.replace(/\.map$/, '');
		}

		compile(pathname, options);
	};
}

module.exports = { jsMiddleware, compile };
