const Koa=require('koa');
const router=require('koa-router')();
const render=require('koa-art-template');
const session=require('koa-session');
const path=require('path');
const app=new Koa();
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:true
})
app.keys = ['some secret hurr']; /** cookie的签名 */
const CONFIG = {
  key: 'koa:sess', /** 默认 */
  maxAge: 86400000, /** cookie的过期时间 【需要修改】*/
  overwrite: true, /** (boolean) can overwrite or not (default true) 没有效果 默认*/
  httpOnly: true, /** true表示只有服务器端可以获取cookie*/
  signed: true, /** 默认 签名 */
  rolling: false, /** 在每次请求时强行设置 cookie,这将重置 cookie 过期时间(默认：false) 【需要修改】*/
  renew: true, /** (boolean) renew session when session is nearly expired 【需要修改】*/
}
app.use(session(CONFIG, app));
router.get('/',async (ctx)=>{
    ctx.session.userinfo = '张三';
   await ctx.render('index')
})
router.get('/news',async (ctx)=>{
    console.log(ctx.session.userinfo);
    await ctx.render('news')
 })
 router.get('/articles',async (ctx)=>{
    await ctx.render('articles')
 })
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001);