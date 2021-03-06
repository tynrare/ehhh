// v0.1
// Пока тут полное мясо, еще не придумал что тут к чему

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
const nocache = require('nocache');

var engines = require('./views/engines.js');

var indexRouter = require('./routes/index');
var sandboxRouter = require('./routes/sandbox');
var roomsRouter = require('./routes/rooms');

const { getEhhhRootPath } = require('./src/ehhh.js'); // Корень самого проекта. Глобальная переменная втыкается через хакс
const jsMiddleware = require('./src/js_middleware.js');

var app = express();

// view engine setup
engines(app);

// middleware
app.use(
	lessMiddleware(path.join(__dirname, 'public'), { dest: path.join(getEhhhRootPath(), 'dest') })
);
//app.use(jsMiddleware());

// static
// Это очевидно неправильный подход просто делать все удобные папки в статик ресурсах,
// Но пока еще не придумал структуры
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(getEhhhRootPath(), 'dest')));
app.use('/ehhh', express.static(getEhhhRootPath()));
app.use('/res', express.static(path.join(getEhhhRootPath(), 'res')));

// routes
app.use('/', indexRouter);
app.use('/sandbox', sandboxRouter);
app.use('/rooms', roomsRouter);

// misc
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(nocache());

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
