
function myfunction(i){

        console.log(i);
        i++;
        if(i!=6){
            myfunction(i);
        }
}

myfunction(1);