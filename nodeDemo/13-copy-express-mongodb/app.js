const url=require('url');
let getObj={};
let postObj={};
function changeRes(res){
    res.send=function(data){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end(data);
    }
}
const app=function(req,res){
    changeRes(res)
    let pathname=url.parse(req.url).pathname.replace('/','');
    // if(pathname=='login'){
    //     obj['login'](req,res)
    // }else if(pathname=='register'){
    //     obj['register'](req,res)
    // }
    // console.log(123)
    if(req.method=='GET'){
        console.log(pathname);
        console.log(getObj[pathname])
        getObj[pathname](req,res)
    }else{
        let arr=[];
        req.on('data',function(chunk){
            arr.push(chunk)
        }).on('end',function(){
            console.log(Buffer.concat(arr).toString());
            req.body=Buffer.concat(arr).toString();
            postObj[pathname](req,res)
        })
    }
}
app.get=function(string,callback){
    getObj[string]=callback;
}
app.post=function(string,callback){
    postObj[string]=callback;
}
module.exports=app;