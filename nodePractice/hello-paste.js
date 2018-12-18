var http=require('http');
http.createServer(function(request,response){
    response.writeHead('200',{'Content-Type':'text/plain;;charset=utf-8'});
    response.end('编写第一个服务');
}).listen(8083);
console.log("第一个编写的服务在'http://127.0.0.1:8083/'");