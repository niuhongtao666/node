const buf=Buffer.alloc(13);
const len=buf.write("www.runoob.com");
console.log('写入字节数:'+len);
const content=buf.toString('utf8');
console.log('写入的内容是:'+content);