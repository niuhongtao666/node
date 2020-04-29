const http=require('http');
const app=require('./app');
const ejs=require('ejs');
const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const dbname='trade';
// const client=new MongoClient(url,{ useUnifiedTopology: true });
const queryString=require('querystring');
// console.log(app);
http.createServer(app).listen(8283);
app.get('index',function(req,res){
    // res.end('login');
    /*client.connect((err)=>{
        if(err) throw err;
        const db=client.db(dbname);
        db.collection('order').find({}).toArray((error,result)=>{
            if(error) throw error;
            console.log(result);
            // client.close();
            ejs.renderFile('views/index.ejs',{list:result},function(err,data){
                if(err) throw err;
                res.send(data);
            })
        })
    })*/
    MongoClient.connect(url,{ useUnifiedTopology: true },(err,client)=>{
        if(err) throw err;
        const db=client.db(dbname);
        db.collection('order').find({}).toArray((error,result)=>{
            if(error) throw error;
            console.log(result);
            client.close();
            ejs.renderFile('views/index.ejs',{list:result},function(err,data){
                if(err) throw err;
                res.send(data);
            })
        })
    })
})
app.get('login',function(req,res){
    ejs.renderFile('views/login.ejs',{},function(err,data){
        console.log('登陆页面渲染')
        if(err) throw err;
        res.end(data);
    })
})
app.get('order',function(req,res){
    ejs.renderFile('views/order.ejs',{},function(err,data){
        console.log('增加页面渲染')
        // console.log(data)
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
app.post('addOrder',function(req,res){
    var infos=queryString.parse(req.body);
    MongoClient.connect(url,{useUnifiedTopology:true},(err,client)=>{
        if(err) throw err;
        const db=client.db(dbname);
        db.collection('order').insertOne(infos,(err,result)=>{
            if(err) throw err;
            console.log(result);
            client.close();
            res.send('增加订单成功');
        })
    })
})
