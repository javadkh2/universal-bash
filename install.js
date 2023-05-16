const fetch = require("node-fetch");
const { spawnSync } = require("child_process");
const tar = require("tar-fs");
const bz2 = require("unbzip2-stream");
const path = require("path");

async function download(link, dir) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(link);
    res.body
      .pipe(bz2())
      .pipe(tar.extract(dir))
      .on("finish", resolve)
      .on("error", reject);
  });
}

function isBashAvailable() {
  try {
    const result = spawnSync(`bash`, {
      stdio: "pipe",
    });
    return !result.error;
  } catch (err) {
    return false;
  }
}

async function addBash() {
  if (isBashAvailable() && !process.env.NOT_USE_GLOBAL_BASH) {
    console.log("bash is already available in the platform");
    return;
  }
  const os = process.platform;
  const arch = process.arch;

  if (os === "win32" || os === "win64") {
    const bit = arch === "x64" ? "64" : "32";
    const link = `https://github.com/git-for-windows/git/releases/download/v2.40.1.windows.1/Git-2.40.1-${bit}-bit.tar.bz2`;
    const bin = path.join(__dirname, "bin");
    console.log(`downloading bash for platform ${os} arch ${arch}`);
    await download(link, bin);
  } else {
    message = '"universal-bash" only provides support for Windows.';
    console.warn(`\x1b[33m${message}\x1b[0m`);
  }
}

addBash();
