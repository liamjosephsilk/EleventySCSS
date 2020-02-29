const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("css", function() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest("./src/site/css"));
});

gulp.task("watch", function() {
  gulp.watch("./src/scss/*.scss", gulp.series("css"));
});
