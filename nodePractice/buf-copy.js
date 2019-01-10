const buf1=Buffer.from('abcdefg');
const buf2=Buffer.from('RUNOOB');
//将buf2插入到buf1指定位置
buf2.copy(buf1,3);
console.log(buf1.toString());//abcRUNO