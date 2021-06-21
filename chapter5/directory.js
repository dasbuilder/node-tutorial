const fs = require("fs");

if (fs.existsSync("./chapter5/storage-files")){
    console.info("directory already exists");
} else{
    fs.mkdir("./chapter5/storage-files", err => {
        if(err){
            throw err;
        }
    
        console.log("directory created");
    });
}