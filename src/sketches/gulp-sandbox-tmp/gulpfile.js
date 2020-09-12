// general
const gulp = require('gulp');
const concat = require('gulp-concat');

// preprocessors
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const less = require('gulp-less');

// webserver
const connect = require('gulp-connect');

function clean(cb) {
	cb();
}

function css(cb) {
	gulp
		.src('./src/**/*.less')
		.pipe(sourcemaps.init())
		.pipe(less())
		.pipe(concat('index.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'));

	cb();
}

function javascript() {
	return gulp
		.src('src/index.js')
		.pipe(sourcemaps.init())
		.pipe(
			babel({
				presets: ['@babel/env']
			})
		)
		.pipe(concat('index.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
}

function html(cb) {
	gulp.src('src/**/*.html').pipe(gulp.dest('dist'));

	cb();
}

function build(cb) {
	gulp.series(clean, gulp.parallel(css, javascript, html))();

	cb();
}

function watch(cb) {
	connect.server({
		root: 'dist',
		livereload: true
	});

	gulp.watch(['src/**/*.js', 'src/**/*.less', 'src/**/*.html'], build);

	cb();
}

exports.default = gulp.series(build, watch);
