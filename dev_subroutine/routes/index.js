var express = require('express');
var router = express.Router();

const { getEhhhRootPath } = require('../src/ehhh.js');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'ehhh...', EHHH_ROOT: getEhhhRootPath() });
});

module.exports = router;
