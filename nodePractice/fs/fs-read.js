var fs=require('fs');
var buf=new Buffer.alloc(1024);
console.log('打开已经存在的文件');
fs.open('text.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功');
    console.log('准备读取文件');
    fs.read(fd,buf,0,buf.length,3,function(err,bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes+'字节被读取');
        //仅输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
    });
});
/*
打开已经存在的文件
文件打开成功
准备读取文件
30字节被读取
件读取你好啊小洁洁
*/