const fs=require('fs');
let readStream=fs.createReadStream('./1.jpg');
let writeStream=fs.createWriteStream('./2.jpg');
readStream.pipe(writeStream);//用于文件复制