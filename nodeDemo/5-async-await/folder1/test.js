// async function a(arg){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             arg=arg*2;
//             resolve(arg)
//         }, 1000);
//     })
// }
// async function c(){
//     var d1=await a(1);
//     var d2=await a(2);
//     var d3=await a(3);
//     console.log(d1+d2+d3);
// }
// c();

setTimeout(() => {
    console.log(1)
}, 1000);
setTimeout(() => {
    console.log(2)
}, 1000);
setTimeout(() => {
    console.log(3)
}, 1000);