// ===
// A. Dev server
require('./www');

// ===
// B. Webpack builder
const path = require('path');
const webpack = require('webpack');
const config = require('../src/webpack/webpack.config.js');
const { getEhhhRootPath } = require('../src/ehhh.js'); // Корень самого проекта. Глобальная переменная втыкается через хакс

const compiler = webpack(
	Object.assign(config, {
		entry: path.join(getEhhhRootPath(), 'src/rooms/subroutine.js'),
		watch: true
	})
);

console.log('Run webpack builder...');

const watching = compiler.watch(
	{
		// Example watchOptions
		aggregateTimeout: 300,
		poll: undefined
	},
	(err, stats) => {
		// Stats Object
		// Print watch/build result here...
		console.log(stats.toString());
	}
);
