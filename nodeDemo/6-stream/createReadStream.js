const fs=require('fs');
const readStream=fs.createReadStream('./write.txt');
let str='';
let count=0;//用于计数
readStream.on('data',(data)=>{
    str+=data;
    count++;
})
readStream.on('end',()=>{
    console.log(str);
    console.log(count);
})
readStream.on('error',(err)=>{
    console.log(err);
})