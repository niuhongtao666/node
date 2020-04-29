const http=require('http');
const fs=require('fs');
const pa=require('path');
const url=require('url');
const ext=require('./static/mode/extname');//获取后缀名
// ext.getExtname(fs,'.css').then((item)=>{
//     console.log(item)
// });//undefined 使用fs.readFile异步，获取不到；改用fs.readFileSync
// console.log();
http.createServer((req,res)=>{
    let path=url.parse(req.url,true).pathname;//去除其他参数，防止影响跳转
    if(path!='/favicon.ico'){
        if(path=='/'){
            path='/index.html';
        }
        fs.readFile('.'+path,(err,data)=>{
            if(err){
                fs.readFile('./404.html',(error,data)=>{
                    if(error) throw error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.write(data);
                    res.end();
                })
            }else{
                // ext.getExtname(fs,'.css')
                // let type;
                //async await
                ext.getExtname(fs,pa.extname(path)).then((item)=>{
                    res.writeHead(200,{'Content-Type':item+';charset=utf-8'});
                    res.write(data);
                    res.end();
                })
            }
        })
    }
}).listen(8283)