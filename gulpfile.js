const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./sass/main.scss')
        .pipe(sass({
            outputStyle: 'expanded',
            indentType: 'tab',
            indentWidth: 1
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch(['./sass/*.scss', './sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);