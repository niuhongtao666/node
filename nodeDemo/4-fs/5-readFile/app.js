//fs.readFile可以读取文件内容
const fs=require('fs');
fs.readFile('./test.html',(err,data)=>{
    if(err) throw err;
    console.log(`读取到的内容：${data}`);
})