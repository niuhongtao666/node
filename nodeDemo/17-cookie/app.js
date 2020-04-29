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
//maxAge和expires都是过期，但是写法不同
router.get('/',async (ctx)=>{
    var hour = 120000;//2min
    let min= new Date(Date.now() + hour);
    let name=new Buffer.from('张三').toString('base64');//如果cookie内容含有中文需要有个base64字符的转化过程
    ctx.cookies.set('username',name,{
        // maxAge:60*1000,
        expires:min,
        // path:'/news',//只有/news页面有cookie，默认‘/’
        /*domain:'.baidu.com'默认当前域名下的页面都可以拿到，一般情况不设置，除非有子站点
        a.baidu.com,b.baidu.com可以共享数据*/
        httpOnly:false,//true,只有服务端可以拿到cookie，可以有效防止xss攻击,如果是false,那么客户端通过document.cookie也可以拿。
    })
   await ctx.render('index')
})
router.get('/news',async (ctx)=>{
    // console.log(ctx.cookies.get('username'))//不过期可以正常显示，过期就是undefined
    let cookieInfo=Buffer.from(ctx.cookies.get('username'),'base64').toString();
    console.log(cookieInfo)
    await ctx.render('news')
 })
 router.get('/articles',async (ctx)=>{
    console.log(ctx.cookies.get('username'))//不过期可以正常显示，过期就是undefined
    await ctx.render('articles')
 })
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);