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
*/