const fs=require('fs');
const writeStream=fs.createWriteStream('./write.txt');//没有文件的话，就会
let str='';
for(let i=0;i<50000;i++){
    str+='我是需要写入的数据1234\n';
}
writeStream.write(str);
writeStream.end();//标记写入完成，否则无法监测事件
writeStream.on('finish',()=>{
    console.log('写入完成');
})
writeStream.on('error',(err)=>{
    if(err) throw err;
})