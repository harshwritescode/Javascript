/* In Javascript we have two types of memory  
                     a)Stack(Primtive) (copy)   b)Heap(Non-Primtive) (Reference)
*/
// 1)
let myemail="dixitharsh248@gmail.com";
let anotheremail= myemail;
anotheremail="vibhu248@gmail.com"
console.log(anotheremail);
console.log(myemail);
/*
Note : 1) Always changes in the copy 
       2) this is goes in stack memory 
*/

let user ={
    myemail:"dixitharsh248@gmail.com",
    upi:"harsh@okaxis",
};

let userone =user;
userone.myemail="vibhu248@gmail.com";

console.table([user.myemail,userone.myemail]);

