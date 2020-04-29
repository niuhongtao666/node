//fs.appendFile 如果文件不存在，则创建文件并且添加内容，如果文件存在，就在文件里追加内容
const fs=require('fs');
fs.appendFile('./appnd.html','你好啊',(err)=>{
    if(err) throw err;
    console.log('操作成功');
})
// fs.appendFileSync('./appnd.html','你好啊');
console.log('进行中');