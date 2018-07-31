import path from 'path';
import fs from 'fs';
import _ from 'lodash';

/* eslint-disable */
const electron = require('electron');
/* eslint-enable */

/*

  不要！！
  在视频播放期间！！！
  使用这两个同步函数！！！！

*/
// return electron'userData'/storage
function getDefaultPath() {
  const app = electron.remote.app || electron.app;
  return path.join(app.getPath('userData'), 'storage');
}
// return electron'userData'/storage/key
function getFileName(key) {
  const defaultPath = getDefaultPath();

  if (!key) {
    throw Error('Missing key');
  }
  if (!_.isString(key) || key.trim().length === 0) {
    throw Error('Invalid key');
  }

  const keyFileName = `${path.basename(key, '.json')}.json`;

  // Prevent ENOENT and other similar errors when using
  // reserved characters in Windows filenames.
  // See: https://en.wikipedia.org/wiki/Filename#Reserved%5Fcharacters%5Fand%5Fwords
  const escapedFileName = encodeURIComponent(keyFileName)
    .replace(/\*/g, '-').replace(/%20/g, ' ');

  const filename = path.join(defaultPath, escapedFileName);
  return filename;
}
function getSync(key) {
  const filename = getFileName(key);
  // then fs.readFile
  let data;
  try {
    data = fs.readFileSync(filename);
  } catch (err) {
    if (err instanceof Error) {
      if (err.code === 'ENOENT') {
        data = JSON.stringify({});
      } else {
        throw err;
      }
    }
  }
  // then parseJsonObject from last step
  const objectJson = JSON.parse(data);

  return objectJson;
}
function setSync(key, json) {
  const filename = getFileName(key);
  const data = JSON.stringify(json);

  if (!data) {
    return Error('Invalid JSON data');
  }
  try {
    fs.mkdirSync(path.dirname(filename));
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log('directory already exist');
    }
  } finally {
    fs.writeFileSync(filename, data);
  }
  return 1;
}
function saveImageSync(videoName, imgData) {
  const defaultPath = getDefaultPath();
  const videoDir = path.join(defaultPath, videoName);
  const imageFileName = path.join(videoDir, 'screenshot.png');
  const base64Data = imgData.replace(/^data:image\/\w+;base64,/, '');
  const dataBuffer = Buffer.from(base64Data, 'base64');
  try {
    fs.mkdirSync(videoDir);
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log('directory already exist');
    }
  } finally {
    fs.writeFileSync(imageFileName, dataBuffer, 'base64');
  }
  return imageFileName;
}
export default {
  getSync,
  setSync,
  saveImageSync,
};
