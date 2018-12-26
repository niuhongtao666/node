const buffer1=Buffer.from('ABC');
const buffer2=Buffer.from('ABC');
const result=buffer1.compare(buffer2);
console.log(result);//-1之前  0 相同 1之后
if(result<0){
    console.log(buffer1+'在'+buffer2+'之前');
}else if(result==0){
    console.log(buffer1+'与'+buffer2+'相同');
}else{
    console.log(buffer1+'在'+buffer2+'之后');
}