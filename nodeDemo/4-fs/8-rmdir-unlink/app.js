//fs.rmdir删除文件夹 fs.unlink删除文件，如果文件夹中有文件，是没有办法直接删除文件夹的，需要先删除其中的文件
const fs=require('fs');
fs.rmdir('./test',(err)=>{
    if(err) throw err;
    console.log('文件夹删除成功')
})
// fs.unlink('./test/test.js',(err)=>{
//     if(err) throw err;
//     console.log('文件删除成功')
// })