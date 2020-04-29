const router=require('koa-router')();
const user=require('./admin/user');
router.get('/',(ctx)=>{
    ctx.body='管理系统首页'
})
router.use('/user',user.routes());
module.exports=router;