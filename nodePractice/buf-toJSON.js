const buf=Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const bufJson=buf.toJSON();
console.log(bufJson);//{ type: 'Buffer', data: [ 1, 2, 3, 4, 5 ] }  Object
console.log(buf);//<Buffer 01 02 03 04 05>
const json=JSON.stringify(buf);
console.log(json);//{"type":"Buffer","data":[1,2,3,4,5]}
console.log(typeof json)
const copy=JSON.parse(json,(key,value)=>{
    // return value&&value.type==='Buffer'?Buffer.from(value.data):value;
    // console.log(key);
    // console.log(value)
    return value;
});
const copy1=JSON.parse(json);
console.log(copy);
console.log(typeof copy);
console.log(copy1);
console.log(typeof copy1);
