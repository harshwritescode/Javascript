/*
      ------------------------------------Introduction
let a=10;
const b=20;
var c=30;

console.log(a); //10
console.log(b); //20
console.log(c); // 30  If all the three keyword should be work same so why we introduced the let and var ??? 


*/

// Problem is Arised: when you are used the block then behaviour should be changed
var c=300;
let a=200;
if(true){
  let a=10;
  const b=20;
  var c=30;
  console.log("a inner",a); //10
  
}
console.log("C:",c);  //C should be override 

// console.log(a);  a is not defined
// console.log(b);  b is not defined
// console.log(c); //30 
console.log("A global",a); //200

/*
Note: Let and const both are functional scope
*/