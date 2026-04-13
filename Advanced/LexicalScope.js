/******************************************************
 * LEXICAL SCOPE IN JAVASCRIPT (DETAILED EXPLANATION)
 ******************************************************/

/*
  👉 Lexical Scope means:
  "A function can access variables from its outer scope
   based on where it is written in the code (NOT where it is called)."

  👉 In simple words:
  JavaScript decides variable access by POSITION in code.
*/


// -----------------------------
// GLOBAL SCOPE
// -----------------------------

let globalVar = "I am global variable";

function outerFunction() {
    
    // outer scope variable
    let outerVar = "I am from outer function";

    console.log(globalVar); // ✅ Accessible (global scope)

    // -----------------------------
    // INNER FUNCTION (LEXICAL SCOPE)
    // -----------------------------
    function innerFunction() {

        let innerVar = "I am from inner function";

        console.log(globalVar); // ✅ Accessible
        console.log(outerVar);  // ✅ Accessible (lexical scope)
        console.log(innerVar);  // ✅ Accessible (local scope)

    }

    innerFunction();
}

outerFunction();


// ---------------------------------------------------
// IMPORTANT POINT:
// innerFunction can access outerFunction variables
// because of LEXICAL SCOPE (NOT because of calling)
// ---------------------------------------------------



// -----------------------------
// EXAMPLE 2: SCOPE CHAIN
// -----------------------------

function first() {
    let a = 10;

    function second() {
        let b = 20;

        function third() {
            let c = 30;

            console.log(a); // ✅ from first()
            console.log(b); // ✅ from second()
            console.log(c); // ✅ from third()
        }

        third();
    }

    second();
}

first();


// ---------------------------------------------------
// LEXICAL SCOPE RULE:
// JS looks variables in this order:
// local → outer → outer's outer → global
// (This is called SCOPE CHAIN)
// ---------------------------------------------------



// -----------------------------
// WRONG ASSUMPTION EXAMPLE
// -----------------------------

function A() {
    let name = "Harsh";
    B();
}

function B() {
    // ❌ ERROR: name is NOT accessible here
    // because B is not written inside A

    // console.log(name);
}

/*
  👉 Even if A calls B,
     B cannot access A's variables.

  👉 Because scope depends on WHERE function is WRITTEN,
     not WHERE it is CALLED.
*/