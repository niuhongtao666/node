var fs=require('fs');
fs.readFile('fileUsedToRead1.txt',function(err,data){
    if(err){
        console.log('错误:'+err.stack)
        return;
    }
    console.log(data);
    console.log(typeof data);
    console.log(data.toString());
});
console.log('不用等文件读取完');
/*
/*<Buffer e4 bd a0 e5 a5 bd e5 95 8a ef bc 8c e5 b8 85 e5 93 a5 ef bc 81> Buffer缓冲区 定义一个buffer类，
创建专门存储二进制数据的缓存区/
object
你好啊，帅哥！
err.stack异常堆栈信息 alert(err.stack)和console.log(err)一样
 */