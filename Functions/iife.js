// Immediately Invoked Function Expressions (IIFE)

// Problem: In JavaScript, global scope pollution can happen
// when too many variables/functions are declared globally.
// IIFE helps to avoid this by creating a private scope.

// Syntax:
// (Function Definition) (Function Execution)


// 🔹 Normal Function (Global Scope)
function welcome(){
  console.log("welcome");
}
welcome();  
// This function is defined in the global scope
// and we call it manually


// 🔹 IIFE using a Named Function
(function welcome(){
  console.log("welcome");
})();
// Here the function is wrapped inside parentheses
// so it becomes an expression, not a declaration
// It runs immediately after being defined
// The name 'welcome' is not accessible outside this function
// This prevents global scope pollution


// 🔹 IIFE using Arrow Function (ES6)
(()=>{
    console.log("welcome");
})();
// This is a modern and shorter syntax of IIFE
// It also runs immediately and keeps variables private


// 🔹 Key Points:
// 1. IIFE executes immediately after creation
// 2. It runs only once
// 3. It creates a private scope
// 4. It helps avoid global variable conflicts

((username)=>{
    console.log(`welcome ${username}`);
})("harsh"); //welcome harsh