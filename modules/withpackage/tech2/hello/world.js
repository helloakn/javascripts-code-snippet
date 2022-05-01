let aa = require('../alpha/aa.js');
let tmpAa = require('tech2/aa');
let tmpOne = require("tech2/num/one")
module.exports ={
    greeting:()=>{
        console.log(aa.name);
        console.log("\n");
        console.log('tmpAa',tmpAa);
        console.log("\n");
        console.log('tmpOne',tmpOne);
    },
    sayByeBye:()=>{
       console.log('bye bye see u next time');
    }
}