const url=require('url');
const fs=require('fs');
const pa=require('path');
exports.routers=function(req,res,staticPath){
    let path=url.parse(req.url,true).pathname;//去除其他参数，防止影响跳转
    if(path!='/favicon.ico'){
        if(path=='/'){
            path=staticPath+'index.html';
        }
        fs.readFile(staticPath+path,(err,data)=>{
            if(err){
                fs.readFile(staticPath+'404.html',(error,data)=>{
                    if(error) throw error;
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.write(data);
                    res.end();
                })
            }else{
                // ext.getExtname(fs,'.css')
                // let type;
                //async await
                getExtname(fs,pa.extname(path),staticPath).then((item)=>{
                    res.writeHead(200,{'Content-Type':item+';charset=utf-8'});
                    res.write(data);
                    res.end();
                })
            }
        })
    }
}
async function getExtname(fs,name,staticPath){
    let result=await getInfo(fs,name,staticPath);
    return result;
}
async function getInfo(fs,name,staticPath){
    return new Promise((resolve,reject)=>{
        fs.readFile(staticPath+'mime.json',(err,data)=>{
            if(err) throw err;
            let exts=JSON.parse(data.toString());
            resolve(exts[name] || 'text/html');
        })
    })
}