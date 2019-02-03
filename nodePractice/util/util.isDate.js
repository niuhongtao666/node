var util=require('util');
console.log(util.isDate(new Date()));//true
console.log(Date());//Sat Feb 02 2019 11:53:15 GMT+0800 (CST)
console.log(typeof Date());//string
console.log(util.isDate(Date()));//false 不是对象
