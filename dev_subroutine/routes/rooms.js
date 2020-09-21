var express = require('express');
var router = express.Router();

const { getEhhhRootPath } = require('../src/ehhh.js');

router.get('/', function (req, res, next) {
	res.render('src/rooms/subroutine.njk', { title: 'ehhh rooms...', EHHH_ROOT: getEhhhRootPath() });
});
router.get('/:view', function (req, res, next) {
	const name = req.params.view;
	const path = `src/rooms/views/${name}.njk`;
	res.render(path, { title: name, query: req.query });
});

module.exports = router;
