const myobject={
    js:"Javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"Swift by apple"
}

//  ----------------------------------------------------forin loop---------------------------------------------------------------------------

// for (const key in myobject) {
//    console.log(myobject[key]);
//    console.log(key);
// }

// const programming=["js","cpp","py"];
// for (const key in programming) {
//     console.log(key);
//     console.log(programming[key]);
// }


//------------------------------------------------foreach loop ---------------------------------------------------------------------------------
// const coding =["js","cpp","java","python"]


// coding.forEach(function (item){console.log(item)})

// coding.forEach( (item)=>{ console.log(item);
// } )

// ----------------------------------------------
const users = [
  {
    id: 1,
    name: "Harsh",
    age: 23
  },
  {
    id: 2,
    name: "Rahul",
    age: 25
  },
  {
    id: 3,
    name: "Ankit",
    age: 22
  }
];

users.forEach( (item)=>{
   console.log(item.name); // Harsh Rahul Ankit
   
} )