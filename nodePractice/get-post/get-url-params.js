var http=require('http');
var url=require('url');
var util=require('util');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});
    //解析url参数
    var params=url.parse(req.url,true).query;
    res.write('年龄'+params.age);
    res.write('\n');
    res.write('性别'+params.sex);
    res.end();
}).listen(3000);
/*
年龄24
性别男
*/