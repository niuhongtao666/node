var fs=require('fs');
//同步读取
console.time("获取数据");
var data=fs.readFileSync('text.txt');
console.log('同步读取：'+data.toString());
console.timeEnd('获取数据');
console.log('程序执行完毕');
/*
同步读取：文件读取-------你好啊，小洁洁
获取数据: 1.849ms
程序执行完毕
*/