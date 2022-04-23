
console.log(' method chain programs');

// class MainClass{

//     sayHi(){
//         console.log("hi hi");
//         return this;
//     }

//     sayHello(){
//         console.log('hellohello');
//         return this;
//     }

// }

// let obj = new MainClass();
// //obj.sayHi();
// //obj.sayHi().sayHello();
// obj.sayHello().sayHi();


class MainClass{

    static Greeting(){
        console.log(" this is greeting");
        let obj = new MainClass();
        return obj;
    }

    sayHi(){
        console.log('hi hi');
        return this;
    }

    sayHello(){
        console.log('hello');
        return this;
    }
}

//let obj = new MainClass();

MainClass.Greeting();
MainClass.Greeting().sayHi().sayHello().sayHi();



