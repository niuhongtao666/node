var fs=require('fs');
console.log('准备删除文件');
fs.unlink('delete.txt',function(err){
    if(err){
        return console.error(err);
    }
    console.log('文件删除成功');
})
/*
准备删除文件
文件删除成功
*/
//再去查看 delete.txt 文件，发现已经不存在了。