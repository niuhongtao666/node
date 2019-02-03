var fs=require('fs');
console.log('准备删除./tempTest/test');
fs.rmdir('./tempTest/test',function(err){
    if(err){
        return console.error(err);
    }
    console.log('读取./tempTest目录');
    fs.readdir('./tempTest',function(err,files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        })
    });
});
/* 
准备删除./tempTest/test
读取./tempTest目录
*/