var gulp= require('gulp'),
sass=require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass',function(){

    return gulp.src('./src/assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css/'))

});




gulp.task('minify-css', function()  {
  return gulp.src('./src/assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./src/assets/css/'));
});