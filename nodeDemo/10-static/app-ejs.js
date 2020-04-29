const http=require('http');
const url=require('url');
const ejs=require('ejs');
const queryString=require('querystring');
const router=require('./static/mode/route');
// console.log(router)
http.createServer((req,res)=>{
    let path=url.parse(req.url,true).pathname.replace('/','');
    console.log(path)
    if(path!='favicon.ico'){
        console.log(124)
        try {
            router[path](req,res);
        } catch (error) {
            router['home'](req,res);
        }
    }
    // try{
    //     router[path][req,res];
    // }catch(err){
    //     router['home'][req,res];
    // }
    // let fun=router[path];
    // fun(req,res);
    // console.log(fun);
    /*res.writeHead(200,{'Content-trpe':'text/html;charset=utf-8'})
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
                let info=Buffer.concat(arr).toString();
                ejs.renderFile('views/next.ejs',{infos:queryString.parse(info)},function(err,str){
                    if(err) throw err;
                    res.end(str);
                })
            })
        }
    }*/
}).listen(8283);