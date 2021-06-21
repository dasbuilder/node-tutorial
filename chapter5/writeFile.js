const fs = require("fs");

const md = `
# This is a new readme.md file

We can write text to a file with fs.writeFile

* fs.readdir
* fs.readFile
* fs.writeFile

`;

fs.writeFile("./chapter5/assets/notes.md", md.trim(), err => {
    if(err){
        throw err;
    }
    console.info("file saved");
});