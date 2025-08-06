const gulp  = require('gulp');
const sass = require('gulp-sass')(require('sass'));// sass -- css
const minifyCSS = require('gulp-minify-css');    // css 压缩

gulp.task('css', async function () { 
    return gulp.src('packages/theme_chalk/*.scss')
        .pipe(sass.sync())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
})