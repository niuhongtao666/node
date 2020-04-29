//fs.rename 1.可以用来重命名文件/文件夹2.可以用来移动文件文件夹的位置
const fs=require('fs');
// fs.rename('./old.js','./test/new-2.js',(err)=>{
//     if(err) throw err;
//     console.log('重命名成功')
// })
fs.rename('./test','./test1/test1',(err)=>{
    if(err) throw err;
    console.log('重命名成功')
})
// fs.rename('./old1.html','./test/old1.html',(err)=>{
//     if(err) throw err;
//     console.log('文件移动成功')
// })