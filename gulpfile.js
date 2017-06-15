var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var livereload = require('gulp-livereload');
var clean = require('gulp-clean');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'js_contact', 'html_dest', 'css_dest', 'img_dest', 'lib_dest']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js_contact', function () {
  gulp.src('./src/script/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./www/js'));
});

gulp.task('html_dest', function () {
  gulp.src('./src/html/**')
    .pipe(gulp.dest('./www/'))
});

gulp.task('css_dest', function () {
  gulp.src('./src/css/**')
    .pipe(gulp.dest('./www/css'))
});

gulp.task('img_dest', function () {
  gulp.src('./src/img/**')
    .pipe(gulp.dest('./www/img'))
});

gulp.task('lib_dest', function () {
  gulp.src('./src/lib/**')
    .pipe(gulp.dest('./www/lib'))
});


gulp.task('watch', function () {

  gulp.watch('./src/**', ['js_contact', 'html_dest', 'css_dest', 'img_dest']);

  livereload.listen();
  gulp.watch(['./www/**'], function (file) {
    livereload.changed(file.path);
  });

});

gulp.task('clean', function () {
  return gulp.src(['./www/*'], {read: false})
    .pipe(clean());
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

