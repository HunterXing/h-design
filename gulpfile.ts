const path = require("path");
const fs = require("fs");
const gulp = require("gulp");

const conventionalChangelog = require("conventional-changelog");

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

const log = gulp.series(changelog);

exports.default = log;
exports.log = log;
