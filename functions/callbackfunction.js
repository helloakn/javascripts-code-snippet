// function MainFunction(_callback){

//         console.log('start');
//         _callback();
//         console.log('end');
// }

// function subFunction(){
//     console.log("i'm call back");
// }
// MainFunction(subFunction);

// MainFunction(()=>{
//     console.log("here we go")
// });

// MainFunction(()=>{
//     console.log("here we go")
// });



function MainFunction(_callback){

    console.log('start');
    _callback(
        ()=>{
            console.log("hello from me");
        }
    );
    console.log('end');
}

MainFunction(
    (_fun)=>{
     console.log("fun start");
     _fun();
     console.log('fun end');
    }
);
