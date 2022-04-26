

function sayHello(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('food');
        }, 1);
      });
}

function sayHi(){
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
            resolve('hihi');
            }, 1);
      }
    ).then(value=>{
        console.log('value',value);
        return value+" from sayHi()";
    });
}


function p1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('hello p1');
        }, 1);
      });
}

function p2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('hello p2');
        }, 1);
      });
}

async function test(){
    console.log('one');
    let hello = await sayHello();
    console.log(hello);
    let hi = await sayHi();
    console.log(hi);
    await Promise.all([await p1(), await p2()]).then(value=>{
        console.log('promises all fun',value);
    });
    console.log('two');

}

test();
// --- --- --- --- ---