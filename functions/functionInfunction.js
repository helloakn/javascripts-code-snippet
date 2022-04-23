
console.log('hello');


function greeting(){
    
    function sayHello(){
        return "hello";
    }
    function sayHi(){
        return "hi";
    }

    return sayHi();
}

let obj = greeting();
console.log(obj)