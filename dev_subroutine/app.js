var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');

var engines = require('./views/engines.js');

var indexRouter = require('./routes/index');
var sandboxRouter = require('./routes/sandbox');

const { getEhhhRootPath } = require('./src/ehhh.js');
const jsMiddleware = require('./src/js_middleware.js');

var app = express();

// view engine setup
engines(app);

// middleware
app.use(lessMiddleware(path.join(__dirname, 'public'), { dest: path.join(__dirname, 'dest') }));
//app.use(jsMiddleware());

// static
app.use(express.static(path.join(__dirname, 'public')));
app.use('/ehhh', express.static(getEhhhRootPath()));

// routes
app.use('/', indexRouter);
app.use('/sandbox', sandboxRouter);

// misc
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
