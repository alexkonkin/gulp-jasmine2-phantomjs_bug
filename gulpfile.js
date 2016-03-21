/*eslint-env node */

var gulp = require('gulp');
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');
var specFiles = 'tests/*.html';

gulp.task('test', function() {
    return gulp.src(specFiles)
        .pipe(jasminePhantomJs());
});

