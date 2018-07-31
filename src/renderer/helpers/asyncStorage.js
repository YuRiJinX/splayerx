import storage from 'electron-json-storage';
import fs from 'fs';

/*
  使用说明：
    在需要使用的组件中
    import asyncStorage from '@/helpers/asyncStorage';
*/
function get(key) {
  return new Promise((resolve, reject) => {
    storage.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
function set(key, json) {
  return new Promise((resolve, reject) => {
    storage.set(key, json, (err) => {
      if (err) {
        reject(err);
      }
    });
  });
}
function readImage(imgPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(imgPath, 'base64', (err, imgString) => {
      if (err) {
        reject(err);
      } else {
        resolve(imgString);
      }
    });
  });
}
export default {
  set,
  get,
  readImage,
};
