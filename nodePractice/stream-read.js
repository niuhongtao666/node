var fs=require('fs');
var data='';
var data2='我最帅';
//创建可读流
var readerStream=fs.createReadStream('fileUsedToRead.txt');
//设置编码为utf8
readerStream.setEncoding('UTF8');
//处理流事件-->data,end,and error
readerStream.on('data',function(chunk){
    data+=chunk;
});
/*readerStream.on('end',function(){
    console.log(data);
});*/
readerStream.on('end',()=>writeS(data));
readerStream.on('error',function(err){
    console.log(err.stack);
    console.log(err);
})
console.log('程序执行完毕')
//创建可写流
let writeS = dataS =>{
    let writeStream = fs.createWriteStream("outInput.txt");
    //使用utf-8写入流    
    writeStream.write(data2+dataS, "UTF8");
    //标记文件末尾
    writeStream.end();
    //处理事件流    
    writeStream.on("finish", () => console.log("写入完成")); 
    writeStream.on("error", err => console.log(err.stack));   
    console.log("程序2执行完毕");
}