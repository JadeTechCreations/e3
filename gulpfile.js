var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var revOutdated  = require('gulp-rev-outdated');
var minifyCss = require('gulp-minify-css');
var ngHtml2Js = require("gulp-ng-html2js");
var inject = require("gulp-inject");
var clean = require('gulp-clean');
var replace = require('gulp-replace');
var gulpAngularExtender = require('gulp-angular-extender');

//Start a web server on port 8282 to server the src app
gulp.task('connect-dev', function() {
    connect.server({
        root: 'project/',
        port: 8282
    });
});

//Default task which simply servers the source files
gulp.task('default', ['connect-dev']);
