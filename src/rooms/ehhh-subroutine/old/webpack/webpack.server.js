var path = require('path');

module.exports = function (app, server, compiler) {
	app.get('/res/*', function (req, res) {
		res.sendFile(path.resolve('.' + req.originalUrl), function (err) {
			if (err) {
				res.status(500).send(err);
			}
		});
	});
};
