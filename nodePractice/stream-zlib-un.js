var fs=require('fs');
var zlib=require('zlib');
//解压stream-input.txt.gz文件为stream-input.txt
fs.createReadStream('stream-input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('stream-input2.text'));
console.log('文件解压完成');