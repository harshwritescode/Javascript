const numbers=[1,2,3,4,5,6,7,8,9,10];
// const newnumber=numbers.map((nums)=>{return nums+10});
// console.log(newnumber);  //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]  //Automatic retiurn the values

// 1)  CHAINING RULE
// const newvalues=numbers.map( (nums)=> nums*10).map((newnumbers)=>newnumbers+1).filter((num)=>num>41);  //                   
// [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101] Without Filters
//[ 51, 61, 71, 81, 91, 101 ]  with filters
// console.log(newvalues);


// --------------------------------------------------    Reduce() in js -------------------------------------------------------   

const nums=[1,2,3,4];
const mytotal=nums.reduce( function (acc,currvalue) {
   return acc+currvalue;
},0);
console.log(mytotal);
// Note : give us a single unit 