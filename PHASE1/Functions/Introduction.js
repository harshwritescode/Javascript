/*
1)
const addtwonumber =  function sum(number1,number2){
     console.log(number1+number2);   
}
addtwonumber(4,5);

2)
function differenece(number1,number2){
   console.log(number1-number2);  
}
differenece(5,2);

3)
function multiply(number1,number2){
    console.log(number1*number2);
}
const result= multiply(4,5);
console.log("Result:",result); undefined 

4)
function multiply(number1,number2){
     return (number1*number2);
     console.log("This is not run because return statement is excuted then remaining line is not executed");
     
}
const result= multiply(4,5);
console.log("Result:",result); //20

5) IMPORTANT

function loggedinUsers(username){
  // This if block is only work when username is not filled by the user its means false 
  // !username -- its means username is not filled if this case is lies then this statment is work   
   if(username===undefined || !username){ // both the meaning should same 

    console.log("Please enter a username First");
    return ;  
   } 
   return (`${username} Just Logged in`);
}
// console.log(loggedinUsers("Harsh")); //Harsh Just Logged in
// console.log(loggedinUsers("")); // Just Logged in
console.log(loggedinUsers()); // undefined Just Logged in


6)
a)
function  calculateCostPrice(number1){
   return number1;
}
// const value = calculateCostPrice(200);
// console.log("Value:",value); // Value: 200

b)
function  calculateCostPrice1(...number1){
   return number1;
}
const value = calculateCostPrice1(200,300,400,500);
console.log("Value:",value); // Value: [ 200, 300, 400, 500 ]
//Note: Spread Operator and Rest Operator both are same but uses are different

c)
function  calculateCostPrice1(...number1){
   return number1;
}
console.log(calculateCostPrice1(200,300,400,500)); //[ 200, 300, 400, 500 ]

7) Important

const users={
    username:"Harsh Dixit",
    Price:999,
}

function handleObject(anyObject){
    console.log(`Usename is ${anyObject.username} and price is ${anyObject.Price}`); 
}

handleObject(users); //Usename is Harsh Dixit and price is 999
//Directly Transfer within the function of Objects
handleObject({
    username:"Krishna Dixit",
    Price:999,
})

const array=[200,300,400];

function handleArray(anyArray){
    return anyArray[1];
}

console.log( handleArray([200,400,600])); //400
*/



 







