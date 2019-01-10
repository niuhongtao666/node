const buffer1=Buffer.from('runoob');
//剪切缓冲区
const buffer2=buffer1.slice(0,2);
console.log('buffer2 content:'+buffer2.toString());//buffer2 content:ru