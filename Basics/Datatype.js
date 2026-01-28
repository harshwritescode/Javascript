// "use strict"   // "use strict" enables Strict Mode in JavaScript, which helps prevent common mistakes, avoids accidental global variables, and makes code more secure and reliable by throwing errors for unsafe actions.

//  x = 10; // Error 
// function add(a, a) {} // Error
// let public = 5; // Error


// 1. Primitive Datatypes

let name="harsh";
let age=28;
let isLoggedin=true;
let city;       // A variable that has been declared but not assigned a value is undefined
let state=null;  // Represents the intentional absence of any object value

 /*

 console.table([typeof(name),typeof(age),typeof(isLoggedin),typeof(city),typeof(state)]);

┌─────────┬─────────────┐
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 'string'    │
│ 1       │ 'number'    │
│ 2       │ 'boolean'   │
│ 3       │ 'undefined' │
│ 4       │ 'object'    │
└─────────┴─────────────┘

console.table([name,age,isLoggedin,city,state]);

┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 'harsh'   │
│ 1       │ 28        │
│ 2       │ true      │
│ 3       │ undefined │
│ 4       │ null      │
└─────────┴───────────┘

*/

/* 2. Non-Primtive Datatypes */

// Object And Symbol  And Arrays

let Car = {
    Price:26,
    Color:"greeen",
    Name:"Harsh"   
};

let colors = ["red", "green", "blue"];





/*   
  console.table([Car]);
┌─────────┬───────┬──────────┬─────────┐
│ (index) │ Price │ Color    │ Name    │
├─────────┼───────┼──────────┼─────────┤
│ 0       │ 26    │ 'greeen' │ 'Harsh' │
└─────────┴───────┴──────────┴─────────┘


console.table([typeof(Car)]);

┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'object' │
└─────────┴──────────┘

console.table([typeof(colors)]);

┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ 'object' │
└─────────┴──────────┘


*/


        


