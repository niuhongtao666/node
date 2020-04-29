//创建目录
const fs=require('fs');
fs.mkdir('./test',(err)=>{
    if(err) throw err;//多次操作会报错Error: EEXIST: file already exists, mkdir './test'
    console.log('文件夹创建成功')
})