//判断是文件还是文件夹
const fs=require('fs');
fs.stat('./test',(err,stats)=>{
    if(err) throw(err);
    console.log(`文件：${stats.isFile()}`);
    console.log(`文件夹：${stats.isDirectory()}`)
});
fs.stat('./package.json',(err,stats)=>{
    if(err) throw(err);
    console.log(`文件：${stats.isFile()}`);
    console.log(`文件夹：${stats.isDirectory()}`)
});