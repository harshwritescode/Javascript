const accountId= 123456;
let accountEmail= "dixitharsh248@gmail.com";
var accountPassword = "abcde";
let accountState;

// If I have change the accountId value then this is not possible because const is not used to change the variable values if you have to change the value then use var and let

// accountId=2345678;
// console.log(accountId);   // TypeError: Assignment to constant variable.
accountEmail="dixitkrishna6789@gmail.com";
accountPassword="efghi";


console.table([accountId,accountEmail,accountPassword,accountState]);

/*  
┌─────────┬──────────────────────────────┐
│ (index) │ Values                       │
├─────────┼──────────────────────────────┤
│ 0       │ 123456                       │
│ 1       │ 'dixitkrishna6789@gmail.com' │
│ 2       │ 'efghi'                      │
│ 3       │ undefined                    │
└─────────┴──────────────────────────────┘
*/


/* Note:
   1) It means we have change the value of "let" and "var" both variables
   2) "console.table" print the indexes and values in an array format
   3) Const values can't be changed
   4) Why we use for "let" and  "var" both the variables in js   

*/




