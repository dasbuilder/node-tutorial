const { basename } = require("path");
const path = require("path");

let fn = path.basename(__filename);
console.info(`Our file is called ${fn}`);