// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var sizeOf = require('image-size');
var fs = require('fs');

function getDims(folder, enconding) {
    return files = new Promise(function (resolve, reject) {
        fs.readdir(folder, enconding, function (err, filenames) {
            if (err)
                reject(err);
            else
                file_list = {
                    path: folder,
                    filenames: filenames
                }
            resolve(file_list);
        });
    });
};