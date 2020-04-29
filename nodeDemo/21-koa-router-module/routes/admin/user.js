const router=require('koa-router')();
router.get('/',(ctx)=>{
    ctx.body='用户首页'
})
router.get('/add',(ctx)=>{
    ctx.body='用户新增'
})
module.exports=router