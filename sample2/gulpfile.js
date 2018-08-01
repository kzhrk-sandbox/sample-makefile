const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('default', ()=>{
  gulp.src('./src/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'))
});
