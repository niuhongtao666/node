const http=require('http');
const url=require('url');
const ejs=require('ejs');
const queryString=require('querystring');

http.createServer((req,res)=>{
    let path=url.parse(req.url,true).pathname;
    // console.log(path);
    res.writeHead(200,{'Content-trpe':'text/html;charset=utf-8'})
    if(path=='/login'){
        const arr=[1,2,3,4];
        const h='<h1>这是h1</h1>'
        ejs.renderFile('views/login.ejs',{msg:1,list:arr,h:h},function(err,str){
            if(err) throw err;
            res.end(str);
        })
    }else if(path=='/toLogin'){
        // console.log(req.method)
        if(req.method=='GET'){
            let infos=url.parse(req.url,true).query;
            console.log(infos)
            ejs.renderFile('views/next.ejs',{infos:infos},function(err,str){
                if(err) throw err;
                res.end(str);
            })
        }else{
            let arr=[];
            req.on('data',function(chunk){
                arr.push(chunk);
            }).on('end',function(){
                // console.log(arr)
                let info=Buffer.concat(arr).toString();
                // console.log(info)
                // info=queryString.parse(info)
                // var obj={
                //     name:1,
                //     age:12
                // }
                // res.end(JSON.stringify(obj));
                ejs.renderFile('views/next.ejs',{infos:queryString.parse(info)},function(err,str){
                    if(err) throw err;
                    res.end(str);
                })
            })
        }
    }
}).listen(8283);