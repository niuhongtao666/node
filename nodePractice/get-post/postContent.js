var http=require('http');
var querystring=require('querystring');
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '姓名： <input name="name"><br>' +
  '年龄： <input name="age"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(req,res){
    //定义一个body变量，用于暂存请求体的信息
    var body='';
    req.on('data',function(chunk){
        body+=chunk;
    });
    req.on('end',function(){
        //解析参数
        console.log('请求结束')
        body=querystring.parse(body);
        //设置响应头部信息以及编码
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        if(body.name&&body.age){
            console.log(111);
            res.write('姓名'+body.name);
            res.write('<br>');
            res.write('年龄'+body.age);
        }else{
            console.log(222);
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);