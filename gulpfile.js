var gulp = require('gulp');
/*var rename = require('gulp-rename');*/
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');




gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 5 version']})
    ];
    return gulp.src('./assets/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});


gulp.task('default', ['css']);