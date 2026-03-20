const Male_cricketers = ["Virat Kohli","Rohit Sharma","David Warner","AB de Villiers"];
const women_cricketers = ["Mithali Raj","Jhulan Goswami"];

/* Our Goal is to combined both the array in a single array 
   1)  push() -- Appends new elements to the end of an array, and returns the new length of the array.
     Note: a)It is considered as a one element of women_cricketers array
           b) when we accessed the  Jhulan Goswami so we are goes in the indexes of an indexes
                Male_cricketers[4][1];
            It is not so good to used this array for merging of both the array
   2) concat() -- Combines two or more arrays. This method returns a new array without modifying any existing arrays.  
   3) Spread Operator -- [ ...firstarray, ...secondarray]
   4) Flat()  --   Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.    
   

   Note:
              Checking something in an array
    1)isArray() - check given something is an array
    2_Array.from() -  Convert in an array
    3)Array.of() - all single variable merge in one array o
*/

/*
a)
Male_cricketers.push(women_cricketers);
console.log(Male_cricketers);//['Virat Kohli','Rohit Sharma','David Warner','AB de Villiers',[ 'Mithali Raj', 'Jhulan Goswami' ]]


b)
const IndianCricketers=Male_cricketers.concat(women_cricketers);
console.log("IndianCricketers:",IndianCricketers);
console.log("MaleCricketers:",Male_cricketers);
console.log("WomenCricketers:",women_cricketers);

Output :     
IndianCricketers: ['Virat Kohli','Rohit Sharma','David Warner','AB de Villiers','Mithali Raj','Jhulan Goswami']
MaleCricketers: [ 'Virat Kohli', 'Rohit Sharma', 'David Warner', 'AB de Villiers' ]
WomenCricketers: [ 'Mithali Raj', 'Jhulan Goswami' ]


c)
const IndianCricketers=[...Male_cricketers,...women_cricketers];
console.log(IndianCricketers);
IndianCricketers: ['Virat Kohli','Rohit Sharma','David Warner','AB de Villiers','Mithali Raj','Jhulan Goswami']

d)

const newArray = [
  1,
  2,
  3,
  [
    4,
    5,
    6,
    7,
    [
      8,
      9,
      1,
      [
        23,
        24,
        25,
        20,
        [40, 42, 43]
      ]
    ]
  ]
];
const flatArray = newArray.flat(Infinity);

console.log(flatArray); //[1,  2,  3,  4,  5,  6,  7,8,  9,  1, 23, 24, 25, 20, 40, 42, 43]


e)
console.log(Array.isArray("Harsh"));  //false
console.log(Array.from("Harsh")); // [ 'H', 'a', 'r', 's', 'h' ]
console.log(Array.from({name:"Harsh"})); // []  Interesting

let score1=100;
let score2=100;
let score3=100;

console.log(Array.of(score1,score2,score3)); // [ 100, 100, 100 ]
*/








                                               
