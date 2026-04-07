const nums=[1,23,34];

// 1)For Loop
// for(let indexing=0;indexing<10;indexing++){
//    console.log(indexing);
// }
//    console.log(indexing);  //outside the scope

// 2) While Loop

// let index=0;
// while(index<=10){

//    console.log("Value of index: ",index);
//    index+=2;
// }

// 3) For-of loop  ["","",""]  or  [{},{},{}]

const arr=[1,2,3,4,5];
// for (const value of arr) {
//    console.log(value);
// }

// const greetings="Hello World"
// for (const element of greetings) {
//      console.log(element);
// }

//Maps In js
// const map = new Map();

// for (const value of arr) {
//    map.set(value, value);   // key = value, value = value
// }

// for (const element of map) {
//    console.log(element);   // [key, value]
// }


// const myobject ={
//    game1:"NFS",
//    game2:"GTA"        /// object are not iterable 
// };

// for (const [key,value] of myobject) {
//     console.log(`key and value : `,key,value);
// }

// NOTE: forof loop iterable in map not in objects



let Users={
    name:"Harsh Dixit",
    age:26,
    Role:"Senior Project Associate"
};
// console.log(Users); //{ name: 'Harsh Dixit', age: 26, Role: 'Senior Project Associate' }
//console.log(JSON.stringify(Users));// {"name":"Harsh Dixit","age":26,"Role":"Senior Project Associate"}
//console.log(Object.values(Users)); // [ 'Harsh Dixit', 26, 'Senior Project Associate' ]
//console.log(Object.keys(Users)); //[ 'name', 'age', 'Role' ]
//console.log(Object.entries(Users));
/*
   [
  [ 'name', 'Harsh Dixit' ],
  [ 'age', 26 ],
  [ 'Role', 'Senior Project Associate' ]
]
*/


