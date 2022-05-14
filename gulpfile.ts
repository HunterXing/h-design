const fs = require("fs");
const conventionalChangelog = require("conventional-changelog");
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
const distFolder = "./lib/styles";

/**
 * compile styles scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src("./packages/styles/src/*.scss")
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
  return gulp.src("./styles/src/fonts/**").pipe(gulp.dest(`${distFolder}/fonts`));
}

/**
 * copy to packages/lib/styles
 */
function copyToLib() {
  return gulp.src(`${distFolder}/**`).pipe(gulp.dest(path.resolve(__dirname, "../../lib/styles")));
}
/*
 * changelog 自动生成
 */
async function changelog(cb) {
  const changelogPath = path.resolve(__dirname, "CHANGELOG.md");
  // path.join(paths.root, 'CHANGELOG.md')
  // 对命令 conventional-changelog -p angular -i CHANGELOG.md -w -r 0
  const changelogPipe = await conventionalChangelog({
    preset: "angular",
    releaseCount: 0,
  });
  changelogPipe.setEncoding("utf8");

  const resultArray = ["# h-design更新日志\n\n"];
  changelogPipe.on("data", (chunk) => {
    // 原来的 commits 路径是进入提交列表
    chunk = chunk.replace(/\/commits\//g, "/commit/");
    resultArray.push(chunk);
  });
  changelogPipe.on("end", async () => {
    await fs.createWriteStream(changelogPath).write(resultArray.join(""));
    cb();
  });
}
const build = gulp.series(compile, copyFont, copyToLib);
const log = gulp.series(changelog);

exports.default = build;
exports.build = build;
exports.log = log;
