const Koa=require('koa');
const router=require('koa-router')();
const favicon=require('koa-favicon');
const admin=require('./routes/admin');
const index=require('./routes/index');
const render=require('koa-art-template');
const path=require('path');
const app=new Koa();
render(app,{
    root:path.join(__dirname,'views'),
    extname:'.html',
    debug:true
})
app.use(favicon(__dirname+'/public/favicon.ico'))
// router.use('/',index.routes()) // 路由那块可以写成'about'
router.use(index.routes())  //  路由那块可以写成'/about'
router.use('/admin',admin.routes())//http://localhost:3000/user/index可以写多级目录
app.use(router.routes()).use(router.allowedMethods());
app.listen(3005)



