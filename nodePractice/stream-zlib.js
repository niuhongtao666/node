var fs=require('fs');
var zlib=require('zlib');
//压缩stream-input.txt文件为stream-input.txt.gz
fs.createReadStream('stream-input.text').pipe(zlib.createGzip()).pipe(fs.createWriteStream('stream-input.txt.gz'));
console.log('文件压缩完成');