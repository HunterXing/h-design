/*
 * @description: 使用gulp读取scss,通过一系列插件进行压缩、处理然后输出到目标地址
 * @Date: 2021-11-14 16:21:40
 * @LastEditTime: 2021-11-19 10:59:01
 * @Author: xingheng
 */

const chalkLog = require("chalk");
const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const dartSass = require("sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const path = require("path");

const noCompPrefixFile = /(index|base)/;

const sass = gulpSass(dartSass);
const distFolder = "./lib";

/**
 * compile styles scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src("./src/*.scss")
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        console.log(
          `${chalkLog.cyan(details.name)}: ${chalkLog.yellow(
            details.stats.originalSize / 1000
          )} KB -> ${chalkLog.green(details.stats.minifiedSize / 1000)} KB`
        );
      })
    )
    .pipe(
      // eslint-disable-next-line no-shadow
      rename((path) => {
        if (!noCompPrefixFile.test(path.basename)) {
          // eslint-disable-next-line no-param-reassign
          path.basename = `h-${path.basename}`;
        }
      })
    )
    .pipe(gulp.dest(distFolder));
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
  return gulp.src("./src/fonts/**").pipe(gulp.dest(`${distFolder}/fonts`));
}

/**
 * copy to packages/lib/styles
 */
function copyToLib() {
  return gulp.src(`${distFolder}/**`).pipe(gulp.dest(path.resolve(__dirname, "../../lib/styles")));
}

const build = gulp.series(compile, copyFont, copyToLib);

exports.build = build;

exports.default = build;
