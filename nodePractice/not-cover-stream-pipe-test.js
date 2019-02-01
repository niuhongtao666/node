var fs=require('fs');
//创建一个可读流
var readerStream=fs.createReadStream('input-test.txt');
//创建一个可写流
var writerStream=fs.createWriteStream('output-test.txt',{ 'flags': 'a' });//https://www.cnblogs.com/yingge/p/5755218.html
//管道读写操作
//读取stream-input.txt文件内容，并将内容写入stream-output.txt文件中
readerStream.pipe(writerStream);
console.log('程序执行完毕');
//不会覆盖原有内容