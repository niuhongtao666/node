const Koa=require('koa');
const ejs=require('ejs');
const views=require('koa-views');
const static=require('koa-static');
const bodyparser=require('koa-bodyparser');
const router=require('koa-router')();
// const getData=require(__dirname+'/utils/getPostData');//封装了方法,获取提交的数据，还有一种方法是使用koa-bodyparser
const app=new Koa();
app.use(views(__dirname+'/views',{extension:'ejs'}));//文件后缀名是ejs
app.use(static(__dirname+'/public'))
// app.use(static('./static'))一个静态资源目录找不到，可以去另一个目录找
// app.use(views(__dirname+'/views',{map:{html:'ejs'}}));//文件后缀名是html
app.use(bodyparser());
app.use(async (ctx,next)=>{
    ctx.state.publicString='publicString';
    await next();
})
router.get('/',async (ctx)=>{
    const content='<h2>html内容渲染</h2>'
    await ctx.render('index',{content})
})
router.get('/news',async (ctx)=>{
    await ctx.render('news')
})
router.get('/form',async (ctx)=>{
    await ctx.render('form')
})
router.post('/doLogin',async (ctx)=>{
    /*let data=await getData.postData(ctx);
    ctx.body=data;*/
    console.log(ctx.request.body)
    ctx.body=ctx.request.body;
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);