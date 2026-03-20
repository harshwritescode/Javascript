/* ------------------------------------------------Arrays --------------------------------------------------------
a)const myarr=[1,2,3,45,true,"Harsh"];
console.table([myarr,typeof myarr]);

┌─────────┬───┬───┬───┬────┬──────┬─────────┬──────────┐
│ (index) │ 0 │ 1 │ 2 │ 3  │ 4    │ 5       │ Values   │
├─────────┼───┼───┼───┼────┼──────┼─────────┼──────────┤
│ 0       │ 1 │ 2 │ 3 │ 45 │ true │ 'Harsh' │          │
│ 1       │   │   │   │    │      │         │ 'object' │
└─────────┴───┴───┴───┴────┴──────┴─────────┴──────────┘

Note:
  1) Array is an object in javascript
  2) Storing a collection of multiple items under a single variable
  3) Array is an Non-Primtive Datatype
  4) In Javascript Arrays are resizable can contain of ,mix of different datatype
  5) Javascript Arrays are not associative arrays and array element can't be accessed using arbitary strings as indexes
    For eaxmple : myarr[0] correct myarr["Zero"] InCorrect
  6)Indexing Started with 0 
  7)When we used Arrays in javascript  for the copy operation then it is always used "SHALLOW COPIES"
  8) Shallow Copies :  Shallow Copy of an Object is a copy whose properties share the same references (Heap Memory) 
     Deep Copies :  Deep Copy of an object is a copy whose properties do not share with the same references
  9) const arr= new Array(1,2,3,4,5);      
*/
