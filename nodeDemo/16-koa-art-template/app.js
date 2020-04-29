const Koa=require('koa');
const router=require('koa-router')();
const render=require('koa-art-template');
const path=require('path');
const app=new Koa();
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:true
})
router.get('/',async (ctx)=>{
    // ctx.body='首页';
    var list={
        id:1,
        h:'<h1>好大好大的字数</h1>',
        arr:[1,2,3]
    }
    await ctx.render('index',{list});
})
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);