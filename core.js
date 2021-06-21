const path = require("path");
const { log } = require("util")

const { getHeapCodeStatistics } = require("v8")

// Working with dirs
const dirUploads = path.join(__dirname, "www", 'files', 'uploads');
console.info(dirUploads)

log( path.basename(__filename));
log(" ^The name of the current file");

log("Get Heap info: ", getHeapCodeStatistics())