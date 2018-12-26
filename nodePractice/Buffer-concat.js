const buffer1=Buffer.from(('菜鸟教程'));
const buffer2=Buffer.from(('www.baidu.com'));
const buffer3=Buffer.concat([buffer1,buffer2]);
const buffer4=Buffer.concat([buffer1,buffer2],12);
console.log(buffer3);//<Buffer e8 8f 9c e9 b8 9f e6 95 99 e7 a8 8b 77 77 77 2e 62 61 69 64 75 2e 63 6f 6d>
console.log('buffer3内容:'+buffer3.toString());//buffer3内容:菜鸟教程www.baidu.com
console.log(buffer4);//<Buffer e8 8f 9c e9 b8 9f e6 95 99 e7>
console.log('buffer4内容:'+buffer4.toString());//buffer4内容:菜鸟教程