var fs=require('fs');
console.time("获取数据");
//异步读取
fs.readFile('text.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('异步读取：'+data.toString());
});
console.timeEnd('获取数据');
console.log('程序执行完毕');
/* 
获取数据: 0.534ms
程序执行完毕
异步读取：文件读取-------你好啊，小洁洁
*/