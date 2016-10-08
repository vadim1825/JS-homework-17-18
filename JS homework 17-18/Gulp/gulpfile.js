var gulp = require('gulp');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var pump = require('pump');

var sass = require('gulp-sass');

var uglifycss = require('gulp-uglifycss');

var watch = require('gulp-watch');




gulp.task('scripts', function() {
  return gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('app/main_js'));
});

gulp.task('compress', function (cb) {
  pump([
        gulp.src('app/main_js/main.js'),
        uglify(),
        gulp.dest('dist/js_build')
    ],
    cb
  );
});

gulp.task('sass', function () {
  return gulp.src('app/scss/style1.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/main_css'));
});

gulp.task('css', function () {
  gulp.src('app/main_css/style1.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/css_build'));
});

gulp.task('watch', function(){
  gulp.watch('app/js/*.js', ['scripts']);
  gulp.watch('app/main_js/main.js', ['compress']);
  gulp.watch('app/scss/style1.scss', ['sass']);
  gulp.watch('app/main_css/style1.css', ['css']);
});

gulp.task('default', ['scripts', 'compress', 'sass', 'css', 'watch']);