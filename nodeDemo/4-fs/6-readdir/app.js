//fs.readdir 读取文件夹下的内容
const fs=require('fs');
fs.readdir('./test',(err,files)=>{
    if(err) throw err;
    console.log(files);//[ 'test.html', 'test1' ]不会读取子代的子代
})