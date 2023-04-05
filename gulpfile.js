"use strict";

var gulp = require("gulp");

var imageResize = require("gulp-image-resize");
var rename = require("gulp-rename");

gulp.task("default", function (done) {
  gulp
    .src("bigimages/*")
    .pipe(
      imageResize({
        width: 1200,
        height: 720,
        crop: true,
        upscale: false,
        format: "jpg",
      })
    )
    //Remove Space
    .pipe(
      rename(function (opt) {
        opt.basename = opt.basename.split(" ").join("");
        return opt;
      })
    )
    .pipe(gulp.dest("resizedimages"));
  done();
});

// gulp.task("default", ["resize"], () => {
//   console.log("completed!");
// });
