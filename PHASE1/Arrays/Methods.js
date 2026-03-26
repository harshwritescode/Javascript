const numberarr=[1,2,3,4,5,6];
const stringarr= ["Harsh","Krishna","Anjali"];
const mixedarr=[1,2,3,true,"Vaibhav","Shivani",0];
const changeDefinationarr=new Array(1,2,3,"Vaibhav",false);

/* ------------------------------------------------------------------------------------------------------------------------------
                                                         Basics Methods
                                                Push() - POP() - Unshift() - Shift()

a)numberarr.push(7);  // For adding the new element from back sides
console.log(numberarr);  // [1,2,3,4,5,6,7]
b)numberarr.pop();  // for removing the last element from the array
console.log(numberarr);  // [1,2,3,4,5,6]
c)numberarr.unshift(9);  // this element is added in the front  no 
console.log(numberarr); //basically all the number is shifted  [9,1,2,3,4,5,6] it is not optimused method let suppose 10,000 element so all element firstly shifted
d)numberarr.shift();  // Basically remove from the front 
console.log(numberarr);  //[ 1, 2, 3, 4, 5, 6 ]
*/

// -------------------------------------------------------------------------------------------------------------------------------

/*                                             To ASK THE Question Method in Javascript?? 
                                        includes () -  indexof () - join () - splice() -slice () 
  

  a)console.log(numberarr.includes(7)); //false -- Boolean
  b)
indexof() is always give us a index number of an array ,
if we find out the duplicate number in an array then it always return the first occurence indexes  const numberarr=[1,2,3,4,1,5,6]; 
console.log(numberarr.indexOf(8));  //-1
console.log(numberarr.indexOf(2));  //1
console.log(numberarr.indexOf(1));  //0 not give us 4

 c) Basically Converts in a String
const newarr=numberarr.join(); 
console.log(numberarr,newarr); //[ 1, 2, 3, 4, 5, 6 ] 1,2,3,4,5,6
 d)

 Note:
 a) When we used in an array of "slice method" it is not impacted in our original array  slice (startingindexes is counted, ending indexes is not counted)

 const OriginalArray=[1,2,3,4,5,6];
console.log("Original Array Before  using the slice method : ",OriginalArray);
const updatedArray = OriginalArray.slice(1,3);
console.log("Updated Array After using the slice method : ",updatedArray);
console.log("Original Array After using the slice method : ",OriginalArray);

Output :
                                 Original Array Before  using the slice method :  [ 1, 2, 3, 4, 5, 6 ]
                 Updated Array After using the slice method :  [ 2, 3 ]
                                Original Array After using the slice method :  [ 1, 2, 3, 4, 5, 6 ]
 b) a) When we used in an array of "splice method" it is  impacted in our original array  spice (startingindexes is counted, ending indexes is also counted)

 const OriginalArray=[1,2,3,4,5,6];
console.log("Original Array Before  using the splice method : ",OriginalArray);
const updatedArray = OriginalArray.splice(1,3);
console.log("Updated Array After using the splice method : ",updatedArray);
console.log("Original Array After using the splice method : ",OriginalArray);

Output :
                                 Original Array Before  using the splice method :  [ 1, 2, 3, 4, 5, 6 ]
                 Updated Array After using the splice method :  [ 2, 3, 4 ]
                                Original Array After using the splice method :  [ 1, 5, 6 ]
*/


 
  






