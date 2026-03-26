/*
================= EXECUTION CONTEXT (EASY ENGLISH) =================

👉 JavaScript runs code inside something called "Execution Context"

👉 There are 2 main types:
1) Global Execution Context (GEC)
2) Function Execution Context (FEC)

---------------------------------------------------------------

🔷 HOW JS RUNS CODE (2 PHASES)

1) Memory Creation Phase
2) Code Execution Phase

---------------------------------------------------------------

🔷 SIMPLE FLOW DIAGRAM

        Start
          |
          v
  Global Execution Context Created
          |
          v
  Memory Phase (store variables & functions)
          |
          v
  Execution Phase (run code line by line)
          |
          v
  Function Call → New Execution Context
          |
          v
  Push to Call Stack
          |
          v
  Function Executes
          |
          v
  Pop from Stack (after return)
          |
          v
         End

---------------------------------------------------------------

🔷 EXAMPLE 1 (Basic)

Code:
var a = 10;
var b = 20;

function add(x, y) {
    return x + y;
}

var result = add(a, b);

---------------------------------------------------------------

👉 MEMORY PHASE:

a = undefined
b = undefined
add = function definition
result = undefined

---------------------------------------------------------------

👉 EXECUTION PHASE:

a = 10
b = 20

add(a, b) → function call

👉 New Execution Context created for add()

Inside add():
x = 10
y = 20
return 30

result = 30

---------------------------------------------------------------

🔷 CALL STACK VISUAL

        ┌──────────────┐
        │   add() EC   │
        ├──────────────┤
        │ Global EC    │
        └──────────────┘

After execution:

        ┌──────────────┐
        │ Global EC    │
        └──────────────┘

---------------------------------------------------------------

🔷 EXAMPLE 2 (Nested Function)

function outer() {
    function inner() {
        console.log("Hello");
    }
    inner();
}

outer();

---------------------------------------------------------------

👉 FLOW:

1) Global EC created
2) outer() called → new EC
3) inner() called → new EC

CALL STACK:

        ┌──────────────┐
        │  inner() EC  │
        ├──────────────┤
        │  outer() EC  │
        ├──────────────┤
        │  Global EC   │
        └──────────────┘

Then:
inner() finishes → pop
outer() finishes → pop

---------------------------------------------------------------

🔷 EXAMPLE 3 (Important Concept)

console.log(x);
var x = 5;

👉 MEMORY PHASE:
x = undefined

👉 EXECUTION:
console.log(x) → undefined
x = 5

👉 This is called HOISTING

---------------------------------------------------------------

🔷 KEY POINTS (VERY IMPORTANT)

✔ JS runs code in Execution Context
✔ Each context has 2 phases:
   - Memory Phase
   - Execution Phase

✔ Functions create new Execution Context
✔ Call Stack manages execution (LIFO)

---------------------------------------------------------------

🔷 SHORT ONE-LINE DEFINITION

👉 Execution Context = Environment where JavaScript code runs

===============================================================
*/