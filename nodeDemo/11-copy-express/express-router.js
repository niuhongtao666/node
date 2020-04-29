const http=require('http');
const app=require('./app');
const ejs=require('ejs');
const queryString=require('querystring');
// console.log(app);
http.createServer(app).listen(8283);
app.get('login',function(req,res){
    // res.end('login');
    ejs.renderFile('views/login.ejs',{},function(err,data){
        console.log('登陆页面渲染')
        if(err) throw err;
        res.end(data);
    })
})
app.get('register',function(req,res){
    res.end('register');
})
app.post('home',function(req,res){
    var infos=queryString.parse(req.body);
    console.log(infos)
    ejs.renderFile('views/next.ejs',{infos},function(err,data){
        // console.log('登陆页面渲染')
        if(err) throw err;
        res.end(data);
    })
})
