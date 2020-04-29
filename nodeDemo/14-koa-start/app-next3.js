const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();
const router=new Router();
//错误处理中间件--注意执行流程
app.use(async (ctx,next)=>{
    console.log('我是一个中间件')
    next()
    if(ctx.status==404){
        console.log('404页面');
        ctx.status=404;
        ctx.body='这是一个404页面'
    }else{
        console.log('正常执行');
    }
})
router.get('/',async (ctx)=>{
    console.log('首页');
    ctx.body='首页'
}).get('/news',async (ctx)=>{
    // console.log(ctx);
    ctx.body='新闻页'
}).get('/articles',async (ctx)=>{
    // console.log(ctx);
    ctx.body='文章页'
})
app.use(router.routes())//router.allowedMethods()响应头设置状态,个人理解这个方法本身就是一个报错机制
app.listen(3000);