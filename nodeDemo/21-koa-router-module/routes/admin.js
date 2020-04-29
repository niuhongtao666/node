const router=require('koa-router')();
router.get('/index',(ctx)=>{
    ctx.body='用户首页'
})
module.exports=router;