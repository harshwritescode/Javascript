let value=new Number(100.678)
// console.log(typeof value); // object
let updatedvalue=value.toString();
// console.log(typeof updatedvalue); // string
let Users={
    name:"Harsh Dixit",
    age:26,
    Role:"Senior Project Associate"
};
// console.log(typeof Users);  // object
// let updatedUsers=Users.toString();
// console.log(updatedUsers);
// console.log(typeof updatedUsers); //string


// Aab yha se hum string ke saare method laga sakte hai
//   1 )at() - retrive the element from an array or string   --- Positive + Negative
// console.log(updatedvalue.length)
// console.log(updatedvalue.at(0));

// for(let i=0;i<updatedvalue.length;i++){
//     console.log(updatedvalue.at(i));  //         1 0 0 . 6 7 8
//  //                                     Indexing 0 1 2 3 4 5 6 
// }



// for(let [key, value] of Object.entries(Users)){
//     console.log(key, value);
// }


 



/*
  2)charat()  -- Positive
  console.log(updatedvalue.charAt());  // by default 0 indexing
  console.log(updatedvalue.charAt(0)); // 0 indexing
  console.log(updatedvalue.charAt(10)); // out of indexes return nothing
  console.log(updatedvalue.charAt(-1)); // out of indexes return nothing 

  3)charCodeAt()
  Always give us a unicode value that  contains all character
  console.log(updatedvalue.charCodeAt(0));  //49
  console.log(updatedvalue.charCodeAt(1));  //48

  4)endwith(searchString,length)
  console.log(updatedvalue.endsWith(678));  //true

  5)includes(searchString,Fromindex)  
  The optional fromIndex defaults to 0. If negative, it counts back from the end of the array (e.g., -1 searches only the last element).
  console.log(updatedvalue.includes('.'));   // true

  6)indexof()  method is used to find the first occurrence of a specific value within a string or an array. It returns the 0-based index of that value, or -1 if the value is not found
  console.log(updatedvalue.indexOf(0)); // return the occurence of the first 100.678

  7)lastIndexof()  method is used to find the last occurrence of a specific value within a string or an array
  console.log(updatedvalue.lastIndexOf(0)); //2

  8)match() match primarily refers to the String.prototype.match() method, which is used to search a string for a specific pattern defined by a Regular Expression (Regex).
  //this return array for matched value 
  console.log(updatedvalue.match(/\d+\.\d+/)); // [ '100.678', index: 0, input: '100.678', groups: undefined ]

*/
  

/*
Note: 
In JavaScript, objects cannot be looped over directly like arrays or strings. 
This is because objects are not iterable by default. 

If you try to use a loop like for...of on an object, it will give an error.

To loop through an object, you first need to convert it into an array using:
- Object.keys()   → gives all keys
- Object.values() → gives all values
- Object.entries() → gives key-value pairs

After converting, you can easily loop over it.

On the other hand, strings and arrays are already iterable, 
so you can directly loop through them using for...of, length, or at().

Simple rule:
Objects → convert first, then loop
Arrays/Strings → directly loop
*/