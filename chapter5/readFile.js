const fs = require("fs");


// reading text from file
// const text = fs.readFile("./chapter5/assets/Readme.md", "UTF-8", (err, text) => {
//     console.log("file contents read");
//     console.info(text);
// });

// reading binary
fs.readFile("./chapter5/assets/alex.jpg", (err, img) => {

        if (err){
            console.info(`Error has occured: ${err.message}`);
            process.exit();
        }
    console.info("file contents read");
    console.info(img);
});
