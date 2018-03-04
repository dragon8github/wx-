const gulp         = require('gulp')
const sass         = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')


function scss () {
    return gulp.src(['./src/pages/**/*.scss', './src/components/**/*.scss'], {base: './src'})
               .pipe(autoprefixer({
                   browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
                   cascade: true,
                   remove: true
               }))
               .pipe(sass().on('error', sass.logError))
               .pipe(rename(function (path) {
                  console.log(path);
                  path.extname = '.wxss';
               }))
               .pipe(gulp.dest('./src'))
}

// 编译sass
gulp.task(scss)


// 静态服务器
gulp.task('serve', function() {
    gulp.watch(['./src/pages/**/*.scss', './src/components/**/*.scss'], scss)
})

// 开始
gulp.task('default', gulp.series('scss', 'serve'))