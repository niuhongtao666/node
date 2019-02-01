var fs=require('fs');
//创建一个可读流
var readerStream=fs.createReadStream('stream-input.text');
//创建一个可写流
var writerStream=fs.createWriteStream('stream-output.txt');
//管道读写操作
//读取stream-input.txt文件内容，并将内容写入stream-output.txt文件中
readerStream.pipe(writerStream);
console.log('程序执行完毕');