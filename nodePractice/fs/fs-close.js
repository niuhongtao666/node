var fs=require('fs');
var buf=new Buffer.alloc(1024);
console.log('准备打开文件');
fs.open('text.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功');
    console.log('准备读取文件');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err);
        }
        //仅输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }
        //关闭文件
        fs.close(fd,function(err){
            if(err){
                console.log(err);
            }
            console.log('文件关闭成功');
        })
    });
})
/* 
准备打开文件
文件打开成功
准备读取文件
文件读取你好啊小洁洁
文件关闭成功
*/