const router=require('koa-router')();
router.get('/',async (ctx)=>{
    // ctx.body='用户首页'
    await ctx.render('admin/user/index')
})
router.get('/add',(ctx)=>{
    ctx.body='用户新增'
})
module.exports=router