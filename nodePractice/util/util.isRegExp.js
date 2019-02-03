var util=require('util');
console.log(util.isRegExp(/[0-9]/));//true
console.log(util.isRegExp({}));//false