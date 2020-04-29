const Koa=require('koa');
const router=require('koa-router')();
const favicon=require('koa-favicon');
const admin=require('./routes/admin');
const app=new Koa();
app.use(favicon(__dirname+'/public/favicon.ico'))
router.get('/',(ctx)=>{ 
    ctx.body='首页'
})
router.use('/admin',admin.routes())//http://localhost:3000/user/index可以写多级目录
app.use(router.routes()).use(router.allowedMethods());
app.listen(3004)



