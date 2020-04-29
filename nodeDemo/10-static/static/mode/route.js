const ejs=require('ejs');
const url=require('url');
const queryString=require('querystring');
var route={
    login:function(req,res){
        // res.end('login')
        const arr=[1,2,3,4];
        const h='<h1>这是h1</h1>'
        ejs.renderFile('views/login.ejs',{msg:1,list:arr,h:h},function(err,str){
            if(err) throw err;
            res.end(str);
        })
    },
    register:function(req,res){
        res.end('register')
    },
    home:function(req,res){
        res.end('home')
    },
    toLogin:function(req,res){
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
    }
};
module.exports=route;