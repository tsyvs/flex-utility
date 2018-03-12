const gulp = require('gulp'); // подключение gulp
const autoprefixer = require('gulp-autoprefixer');
             // подключение autoprefixer

gulp.task('hello', function(){
    console.log('Hello World!');
});

gulp.task('autoprefixer', function(){
    gulp.src('source/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'));
});

