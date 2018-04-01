var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
	sass : {
		scss : 'src/assets/scss/**/*.scss',
		css : 'src/assets/css',
		map : './'
	},
	js : {
		input : 'src/assets/js-libs/**/*.js',
		output : 'src/assets//js'
	}
}

gulp.task('sass', function(){
	setTimeout(function(){
	return gulp.src(paths.sass.scss)
		.pipe(sass({
			outputStyle: 'compressed',
			sourceComments: false
		}).on('error', sass.logError))
		.pipe(autoprefixer({browsers:['> 1%', 'IE 8'], cascade: false}))
		.pipe(gulp.dest(paths.sass.css))
		.pipe(notify("CSS Updated"));
		}, 800);
});

gulp.task('scripts', function () {
	return gulp.src(paths.js.input)
		.pipe(plugins.concat('app.min.js'))
		.pipe(gulp.dest(paths.js.output))
		.pipe(notify("JS Updated"));
});

gulp.task('watch-js', function () {
	gulp.watch(paths.js.input, ['scripts']);
});

gulp.task('watch-sass', function () {
	gulp.watch(paths.sass.scss, ['sass']);
});

