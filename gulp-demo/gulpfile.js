const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task('convertJS', function () {
  return gulp.src('src/scripts/*.js')
    .pipe(concat('all.min.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

gulp.task('sass', function () {
  gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});


gulp.task('default', ['convertJS', 'sass']);