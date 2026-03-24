/*
Basics 
const coding =["js","cpp","java","python"];

const values=coding.forEach((item)=>{
    // console.log(item);
    return item;
})

console.log(values);  //undefined never return anything 
*/

/*
------------------------------------------------------ Filters with condition Operator ---------------------------------
const numbers=[1,2,3,4,5,6,7,8,9,10];

const values=numbers.filter((num)=>(num>4))
console.log(values); // [ 5, 6, 7, 8, 9, 10 ]  // return a array
*/


// ------------------------------------------------------  Foreach + filter --------------------------------------------------------  
const numbers=[1,2,3,4,5,6,7,8,9,10];

const mynewnumbers=[];
numbers.forEach((nums)=>{
    if(nums>4)
        mynewnumbers.push(nums)
})

console.log(mynewnumbers);  // [ 5, 6, 7, 8, 9, 10 ]
