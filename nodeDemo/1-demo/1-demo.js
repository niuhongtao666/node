// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8281);

// console.log('Server running at http://127.0.0.1:8281/');
const http=require('http');
const url=require('url');
http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url!='/favicon.ico'){
        // console.log(123)
        // console.log(url.parse(req.url))
        let urlObj={...url.parse(req.url,true).query};
        console.log(url.parse(req.url,true).query)
        // console.log(urlObj)
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.write(`<h1>
                    姓名：${urlObj.name}<br/>
                    年龄：${urlObj.age}
                   </h1>`
                );   
        res.end();
    }
}).listen(8281);