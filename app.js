const logger = require("progress-estimator")();
const youtubedl = require("youtube-dl-exec");

const url = "https://www.youtube.com/watch?v=6xKWiCMKKJg";
const promise = youtubedl(url, { dumpSingleJson: true });
async function download() {
  const result = await logger(promise, `Obtaining ${url}`);
  return result;
}

const result = download();
console.log(result);

// downloading the video now using the url obtained from the previous step

let videoSettings = {
  recodeVideo: "mp4",
  formatSort: "res:1080",
};

const options = {
  cwd: __dirname,
};
const url1 = "https://www.youtube.com/watch?v=6xKWiCMKKJg";

async function videoDownload(url1) {
  try {
    // await youtubedl(url, settings, { cwd: __dirname });
    await youtubedl(url1, videoSettings, options);
  } catch (error) {
    console.log(error);
  }
}

videoDownload(url1);
