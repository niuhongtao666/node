const router=require('koa-router')();
router.get('/',async (ctx)=>{
    // ctx.body='首页列表'
    await ctx.render('default/index');
})
router.get('/about',async (ctx)=>{
    // ctx.body='首页关于'
    await ctx.render('default/about');

})
module.exports=router