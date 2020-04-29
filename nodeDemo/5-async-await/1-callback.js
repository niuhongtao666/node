使用callback获取异步方法里面的数据
function getData(callback){
    setTimeout(()=>{
        let a=123;
        callback(a);
    },1000)
}
getData(function(arg){
    console.log(arg)
})