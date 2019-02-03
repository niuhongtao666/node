var fs=require('fs');
console.log('准备写入文件');
fs.writeFile('write.txt','我是通过fs.writeFile写入文件的内容',function(err){
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功');
    console.log('-------分割线------');
    console.log('读取写入的数据');
    fs.readFile('write.txt',function(err,data){
        if(err){
            return console.log(err);
        }
        console.log('异步读取文件数据:'+data.toString());
    });
});
/* 
准备写入文件
数据写入成功
-------分割线------
读取写入的数据
异步读取文件数据:我是通过fs.writeFile写入文件的内容
*/