const name= "harsh";
const count =50;

//console.log(name +count);  // this is old version don't use
//console.log(`Hello my name is ${name} and my count of repository is ${count}`);  // using string interpolation

// second method to declare string
/*    This is a javascript  datatype It always return object*/
var gameName= new String('Harsh');




/* 
  

a)console.table([gameName,typeof gameName]);
┌─────────┬─────┬─────┬─────┬─────┬─────┬──────────┐
│ (index) │ 0   │ 1   │ 2   │ 3   │ 4   │ Values   │
├─────────┼─────┼─────┼─────┼─────┼─────┼──────────┤
│ 0       │ 'H' │ 'a' │ 'r' │ 's' │ 'h' │          │
│ 1       │     │     │     │     │     │ 'object' │
└─────────┴─────┴─────┴─────┴─────┴─────┴──────────┘

b)console.table([gameName[2]]);

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 'r'    │
└─────────┴────────┘

c) console.table([gameName[5]]);

┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ undefined │
└─────────┴───────────┘

d) gameName[5]='i';
   console.table([gameName]);

┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ 0       │ 'H' │ 'a' │ 'r' │ 's' │ 'h' │ 'i' │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┘
   
e) console.log(gameName.length);   //5
f) console.log(gameName.toUpperCase());  //HARSH
g) console.log(gameName.charAt(2));  //r  to find out the alphabet position in an string
h)  var gameName= new String('Harsh');
    gameName.toLowerCase();
    console.log((gameName));   //It always return new string and not changed because This string hoes into a stack memory not in heap
i) var gameName= new String('Harsh');
   gameName=gameName.toLowerCase();
   console.log((gameName));   harsh  // It change because you have give the reference of an string object  
j) var gameName= new String('HarshH');
  console.log(gameName.indexOf('H')); // It always return the first occurence of alphabet

*/ 



/*
Final Conclusion:

      ************************************************************IMPORTANT**************************************************************
 CASE 1: Primitive String
-----------------------

STACK
┌───────────────┐
│ name          │
│ "harsh"       │
└───────────────┘

name.toUpperCase()
        │
        ▼
   "HARSH"   (NEW STRING)
        ❌ not stored

➡ Original "harsh" unchanged


------------------------------------------------


CASE 2: String Object (new String)
----------------------------------

STACK                     HEAP
┌───────────────┐        ┌──────────────────┐
│ name          │ ───▶   │ String Object    │
│ reference     │        │ value: "harsh"   │
└───────────────┘        └──────────────────┘

name.toUpperCase()
        │
        ▼
   "HARSH"   (NEW STRING)
        ❌ not stored

➡ In heap this is also unchanged "harsh" bhi unchanged

NOTE: In JavaScript, whether a string is a primitive or created using new String(),
the string data is immutable.
That’s why string methods do not change the original value;
instead, they return a new string.

------------------------------------------------


FINAL RULE (Same for both cases)
--------------------------------

String (primitive ho ya object):
❌ Modify nahi hoti
✅ New string return hoti hai
     
        

        ********************************************************************************************************************************************************************

 */       
