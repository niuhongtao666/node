const http=require('http');
const fs=require('fs');
const pa=require('path');
const url=require('url');
const route=require('./routes/router.js');//
// console.log(route)
// ext.getExtname(fs,'.css').then((item)=>{
//     console.log(item)
// });//undefined 使用fs.readFile异步，获取不到；改用fs.readFileSync
// console.log();
http.createServer((req,res)=>{
    route.routers(req,res,'./')
}).listen(8283)