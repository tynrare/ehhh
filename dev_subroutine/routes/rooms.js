var express = require('express');
var router = express.Router();

const { getEhhhRootPath } = require('../src/ehhh.js');

router.get('/', function (req, res, next) {
	res.render('src/rooms/subroutine.njk', { title: 'ehhh rooms...', EHHH_ROOT: getEhhhRootPath() });
});

module.exports = router;
