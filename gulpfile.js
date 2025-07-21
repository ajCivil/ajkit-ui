const gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));// sass -- css
const minifyCSS = require('gulp-minify-css');    // css 压缩

gulp.task('css', async function () { 
    return gulp.src('components/css/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
})