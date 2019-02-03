var fs=require('fs');
/*fs.mkdir('/hello/test/',{recursive:false},function(err){
    if(err){
        return console.error(err);
    }
    console.log('目录创建成功');
});*/
//最新创建多级目录
fs.mkdir('./tempTest/test', { recursive: true }, (err) => {
  if (err) throw err;
  console.log("Finish.");
});
//异步
//低版本方法创建多层目录   v10.12.0   https://blog.csdn.net/m0_37263637/article/details/84842766
/*fs.mkdir("./tmp/",function(err){
    if (err) {
        return console.error(err);
    }
    console.log("tmp目录创建成功。");
    fs.mkdir("./tmp/test/",function(err){
        if (err) {
            return console.error(err);
        }
        console.log("test目录创建成功。");
     });
 });*/
/*同步
 fs.mkdirSync("./tmp1/");
 fs.mkdirSync("./tmp1/test/");
 */
/* 
tmp目录创建成功。
test目录创建成功。
*/