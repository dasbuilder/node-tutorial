const fs = require("fs");

// blocks code from running
// const files = fs.readdirSync("./chapter5/assets");

// can use this to do async function
fs.readdir("./chapter5/assets", (err, files) => {
    if (err){

    }

    console.info("complete");
    console.log(files);
});

console.info("started reading files");