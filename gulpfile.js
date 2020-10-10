const gulp = require("gulp");


gulp.task("copy-html",function(){
    return gulp
    .src("*.html")
    .pipe(gulp.dest("dist/"))
})

gulp.task("images",function(){
    return gulp
    .src("images/**/*")
    .pipe(gulp.dest("dist/images"))
})


const sass = require("gulp-sass")
sass.compiler = require("node-sass")
gulp.task("sass",function(){
    return gulp.src("./scss/**/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("dist/css"));
})

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
  })


gulp.task("watch",function(){
    gulp.watch("*.html",["copy-html"]);
    gulp.watch("images/**/*",["image"]);
    gulp.watch("./scss/**/*.scss",["sass"])
    gulp.watch(["*.js", "!gulpfile.js"], ['scripts']);
})