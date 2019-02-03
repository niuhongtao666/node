var fs=require('fs');
//异步打开文件
console.log('准备打开文件');
fs.open('text.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功：'+fd);
    console.log(fd);
})
//fd - 通过 fs.open() 方法返回的文件描述符。