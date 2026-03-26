/*
function one(){
    const username ="Harsh Dixit";

     function Two(){
        const email="dixitharsh248@gmail.com";
        console.log(username);    
     }
    //  console.log(email);  //email is not defined because you are access this variable after the functional scope

    //  Two(); //Harsh Dixit
}

one(); //Nothing Because we can't print anything in that function


*/

// ---------------------------------------------------Interesting Concept---------------------------------------------------------
//console.log(addone(5)); It will work //6

function addone(num){
    return num+1;
}
 
//   -------------------------------- Hoisting is work on it behind this logic ---------------------------------------- 

console.log( addTwo(6)); //It will not work before initialization  we can access the function
// Expression Type Function
const addTwo = function(num){ 
    return num+2;
}

// We learnt after Hoisting ?? 
//Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before execution.