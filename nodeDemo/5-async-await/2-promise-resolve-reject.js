/*async*/
// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let a=123;
//         resolve(a);
//     },1000)
// })
// p.then((data)=>{
//     console.log(data)
// })
async function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a=123;
            resolve(a);
        },1000)
    })
}
async function b(){
    let value= await a();
    // console.log(value);
    return value;
}
b().then(((item)=>{console.log(item)}));
// async function timeout() {
//     for (let index = 0; index < 3; index++) {
//         console.log('async '+ index);
//     }
// }
// console.log(timeout());
// console.log('outer')