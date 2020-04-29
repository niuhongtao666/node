//fs.writeFile 如果文件不存在，可以创建并写入文件，如果存在可以替换内容
const fs=require('fs');
fs.writeFile('./1.html','你好啊123',(err)=>{
    if(err) throw err;
    console.log('操作成功');
})