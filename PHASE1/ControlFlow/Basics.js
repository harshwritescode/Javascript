// 🔹 IF-ELSE in JavaScript (Easy Explanation)

// 👉 if(condition) → executes when condition is TRUE
// 👉 else → executes when condition is FALSE


// 🔸 Falsy Values in JavaScript:
// false, 0, -0, 0n (BigInt zero), "", null, undefined, NaN

// 🔸 Truthy Values:
// true, 1, " ", "0", "false", [], {}, function(){}


// 🔸 Example 1:
if(0){
   console.log("Hello");    
}
else{
   console.log("Else is executed");  
}

// 👉 0 is FALSY → Output: Else is executed


// 🔸 Example 2:
if(1){
   console.log("Hello");  
}
// 👉 1 is TRUTHY → Output: Hello


// 🔸 Example 3:
if(""){ 
   console.log("Hello");
}
else{
   console.log("Empty string is false");
}
// 👉 "" is FALSY → Output: Empty string is false


// 🔸 Example 4:
if("Harsh"){
   console.log("String is true");
}
// 👉 Non-empty string is TRUTHY → Output: String is true


// 🔥 Important Concept:
if([]){
   console.log("Array is truthy");
}
// 👉 [] (empty array) is TRUTHY → Output: Array is truthy

if({}){
   console.log("Object is truthy");
}
// 👉 {} (empty object) is TRUTHY → Output: Object is truthy



// ======================================================
// 🔹 COMPARISON OPERATORS
// ======================================================

// >   → greater than
// <   → less than
// ==  → checks only value (loose equality)
// === → checks value + type (strict equality)
// !=  → not equal (loose)
// !== → not equal (strict)


// 🔸 Example 5:
if(5 > 3){
   console.log("5 is greater than 3");
}


// 🔸 Example 6:
if(5 == "5"){
   console.log("Equal (loose check)");
}
// 👉 TRUE (only value is compared)


// 🔸 Example 7:
if(5 === "5"){
   console.log("Equal (strict check)");
}
else{
   console.log("Not equal in strict check");
}
// 👉 FALSE (type mismatch → number !== string)



// ======================================================
// 🔹 SWITCH CASE (Alternative to multiple if-else)
// ======================================================

// 👉 Used when checking one variable against multiple fixed values

let day = 3;

switch(day){
   case 1:
      console.log("Monday");
      break;

   case 2:
      console.log("Tuesday");
      break;

   case 3:
      console.log("Wednesday");
      break;

   case 4:
      console.log("Thursday");
      break;

   case 5:
      console.log("Friday");
      break;

   case 6:
      console.log("Saturday");
      break;

   case 7:
      console.log("Sunday");
      break;

   default:
      console.log("Invalid Day");
}

// 👉 Output: Wednesday



// ======================================================
// 🔸 IMPORTANT: SWITCH without BREAK (Fall-through concept)
// ======================================================

let value = 2;

switch(value){
   case 1:
      console.log("One");

   case 2:
      console.log("Two");

   case 3:
      console.log("Three");
}

// 👉 Output:
// Two
// Three

// 👉 Reason:
// Without break, execution continues to the next cases



// ======================================================
// 🔹 QUICK SUMMARY (Interview Revision)
// ======================================================

// 👉 Falsy Values:
// false, 0, -0, 0n, "", null, undefined, NaN

// 👉 Truthy Values:
// Everything else (arrays, objects, strings, numbers except 0)

// 👉 == vs ===
// ==  → compares only value
// === → compares value + type (recommended)

// 👉 Use switch:
// when checking one variable against multiple exact values

// 👉 Use if-else:
// when dealing with complex conditions (>, <, multiple variables)