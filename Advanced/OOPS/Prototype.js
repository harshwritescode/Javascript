/*
   JavaScript’s default behavior is “prototype-based”, in simple words:

   In JavaScript, objects are not directly copied from each other,
   instead they share properties & methods through a link (prototype chain).

   a) When you create an object, it is not alone
   b) It has a hidden connection with another object (called prototype)

   If an object does not find something,
   it takes it from its prototype

   let arr = [1,2,3];
   arr.push(4);  // where did push method come from?

   We did not define push method,
   it comes from Array.prototype


   Simple analogy:

   Think:

   You = object
   Your father = prototype

   If you don’t have a skill → you take it from your father


   | Keyword       | Work                                                  |
   | ------------- | ----------------------------------------------------- |
   | `new`         | creates a new object + sets prototype link            |
   | `this`        | refers to the current object                          |
   | `class`       | easy syntax for prototype (syntactic sugar)           |
   | `inheritance` | one object uses another object’s prototype            |


   Diagram:

           null                                     
             ↑
      Object.prototype
             ↑
      Array.prototype
             ↑
           arr = [1,2,3]

/*
🔹 STRING PROTOTYPE CHAIN

         null
           ↑
   Object.prototype
           ↑
   String.prototype
           ↑
   "Harsh"   // string value (auto boxed to String object)
*/


/*
🔹 FUNCTION PROTOTYPE CHAIN

         null
           ↑
   Object.prototype
           ↑
   Function.prototype
           ↑
   getUser() { }   // function object

*/
// -------------------------------------------------------------------------------------------------------------------------- 
function multiplyby5(num){
    return num*5;
}
multiplyby5.power=2;
 
// console.log(multiplyby5(5));   //25
// console.log(multiplyby5.power); //2
// console.log(multiplyby5.prototype); // {} Empty Parenthesis 

// Function behave same as function as well as object 

// ------------------------------------------------------------------------------------------------------------------------------- 

function createuser(username,score){
    this.username=username;
    this.score=score;
}

createuser.prototype.increment = function (){
    this.score++;
}

createuser.prototype.userdetails =function(){
    console.log(`Welcome ${this.username} your score is ${this.score}`);
    
}
// const userone= createuser("Harsh",90);
// const usertwo= createuser("Harsh",190);

// userone.userdetails();  // TypeError: Cannot read properties of undefined (reading 'userdetails') 


/*
 Correct Reason :

- The error occurs because we did NOT use the "new" keyword while creating the object.
- Without "new", the function does NOT create a proper object instance.
- Also, the prototype link is NOT set between the object and createuser.prototype.

What actually happens:

- createuser("Harsh", 90) returns undefined (if nothing is explicitly returned)
- So, userone becomes undefined
- That’s why userone.userdetails() throws an error

 Why "new" is important:

- It creates a new object
- Sets "this" to that object
- Links the object to createuser.prototype
- Returns the object automatically

 Correct way:

const userone = new createuser("Harsh", 90);
const usertwo = new createuser("Harsh", 190);

userone.userdetails();
*/
const userone = new createuser("Harsh", 90);
const usertwo = new createuser("Harsh", 190);

userone.userdetails();