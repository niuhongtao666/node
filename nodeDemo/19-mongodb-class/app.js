const Koa=require('koa');
const router=require('koa-router')();
const render=require('koa-art-template');
const static=require('koa-static');
const bodyparser=require('koa-bodyparser');
const favicon = require('koa-favicon');
const path=require('path')
const app=new Koa();
const db=require('./module/db');
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:true
})
app.use(bodyparser());
app.use(static(__dirname+'/public'));
app.use(favicon(__dirname+'/public/favicon.ico'));
router.get('/',async(ctx)=>{
    // console.time('result0')
    let result=await db.find('order',{})
    // console.timeEnd('result0')
    ctx.render('index',{list:result})

})
router.get('/news',async(ctx)=>{
    // console.time('result1')
    let result=await db.find('order',{})
    // console.timeEnd('result1')
    ctx.render('news')
})
router.get('/add',async(ctx)=>{
    // console.time('result1')
    ctx.render('add');
})
router.post('/add',async(ctx)=>{
    console.log(ctx.request.body)
    let obj=ctx.request.body;
    let data=await db.insert('order',obj);
    try {
        if(data.result.ok){
            ctx.redirect('/')
        }
    } catch (error) {
        if(err) throw err;
        ctx.redirect('/add')
    }
})
router.get('/edit',async(ctx)=>{
    // console.time('result1');
    let query=ctx.query;
    // console.log(query.id)
    // console.log(db)
    let data=await db.find('order',{'_id':db.getObjectID(query.id)})
    // console.log(data)
    ctx.render('edit',{orderInfo:data[0]});
})
router.post('/edit',async(ctx)=>{
    // console.time('result1');
    let query=ctx.request.body;
    // console.log(ctx.request.body)
    let params=JSON.parse(JSON.stringify(ctx.request.body))
    delete params.id;
    // console.log(params)
    // console.log(query.id)
    // console.log(db)
    let data=await db.update('order',{'_id':db.getObjectID(query.id)},params)
    if(data.result.ok==1){
        ctx.redirect('/')
    }
    // ctx.render('edit',{orderInfo:data[0]});
})
router.get('/delete',async(ctx)=>{
    let data=await db.remove('order',{_id:db.getObjectID(ctx.query.id)});
    if(data.result.ok==1){
        ctx.redirect('/')
    }
})
router.get('/update',async(ctx)=>{
    // console.time('result1')
    let obj={
        all_null:4
    }
    let obj1={
        all_null:5
    }
    let result=await db.update('order',obj,obj1);
    console.log(result)
    // console.timeEnd('result1')
    ctx.body='更新成功'
})
router.get('/remove',async(ctx)=>{
    console.time('result1')
    let obj={
        all_null:5
    }
    let result=await db.remove('order',obj);
    console.log(result)
    console.timeEnd('result1')
    ctx.body='删除成功'
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3002);