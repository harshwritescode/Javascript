let score= undefined;
// console.log(typeof score);

/*  I want to find out the type of this variable 
  why ??
 a)We already know that This variable type is a number.
 b)Sometime we have work on the backend and our Frontend team  give this data like this "33".
 c)In backend we had done the operations by a number not a string .
 d)So,Avoid any such things we have find out the type and convert the type as our backend code
*/

let valueNumber= Number(score);
// console.table([score,valueNumber,typeof valueNumber]);

/*  
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ '33abc'  │
│ 1       │ NaN      │   //  But value is NaN
│ 2       │ 'number' │   // When we used conversion so please rely and check the number of value because "33abc" is not convert in number and this Class is convert it..
└─────────┴──────────┘


type : object
┌─────────┬──────────┐
│ (index) │ Values   │
├─────────┼──────────┤
│ 0       │ null     │
│ 1       │ 0        │
│ 2       │ 'number' │
└─────────┴──────────┘

Type : undefined
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ undefined │
│ 1       │ NaN       │
│ 2       │ 'number'  │
└─────────┴───────────┘

Note:
a) 22 => 22
b) 22abc => NaN
c)  true => 1 , False =>0
d)  null => 0
e) undefined => NaN

*/

 
/*   Boolean and String Operations   */
let isLoggedin = null;
// console.log(Boolean(isLoggedin));


/*
Note:
a) 1 => true , 0 => false 
b) "" => false , "harsh" => true
c) undefined => false
d) null => false
*/

