const fs = require("fs");
const colorData = require("./assets/colors.json");

// being able to append files
colorData.colorList.forEach(c => {
    fs.appendFile("./chapter5/storage-files/colors.md", `${c.color}: ${c.hex}\n`, err => {
        if(err) { 
            throw err;
        }
    });
});