//检查是否有upload目录，如果有不做处理，如果没有，就创建
const fs=require('fs');
const path='./upload';
fs.stat(path,(err,stats)=>{
    if(err){
        mkUploadDirectory(path);
        return;
        // throw err;
    }
    if(stats.isDirectory()){
        console.log('upload文件夹已存在');
    }else if(stats.isFile()){
        console.log('存在该名称文件，已删除这个文件');
        fs.unlink('./upload',(err)=>{
            if(err) throw err;
            mkUploadDirectory(path);
        })
    }
})
function mkUploadDirectory(path){
    fs.mkdir(path,(err)=>{
        if(err) throw err;
        console.log('成功创建文件夹');
    })
};
