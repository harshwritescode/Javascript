//  Object Declaration  ways --  Literal way(Multiple Instances) / Constructor Way(Singleton Instances)

/*
    1) Object Literals 
    const NewSymbol = Symbol("key1");

const users = {
    "Full Name":"Harsh Dixit",
    name:"Harsh",
    [NewSymbol]:"key1",
    age:24,
    isactive:true
};
console.log(users); //{ name: 'Harsh', age: 24, isactive: true }
console.log(users.name); //Harsh
console.log(users["name"]); //Harsh
console.log(users.age);  //24
console.log(users["age"]);  // 24
console.log(users.NewSymbol); // key1, String
console.log(typeof users[NewSymbol]);  //key1 String

Output:  
          a)  {
              'Full Name': 'Harsh Dixit',
              name: 'Harsh',
              age: 24,
              isactive: true,
              [Symbol(key1)]: 'key1'
            }

           b) Harsh
           c) Harsh
           d) 24
           e) 24
           f) undefined
           g) key1 String

Note: 
 1) Right now If you are using dot for the full name then it is not possible to access that so used 2nd method that is [ " "] Act as a String Square notation

    
*/


const users = {
    "Full Name":"Harsh Dixit",
    name:"Harsh",
    NewSymbol:"key1",
    age:24,
    isactive:true
};

users.greeting = function(){
    console.log("Hello Greeting Function is added");   
}

users.SelfIntroduction = function(){
    console.log(`Hello ${this["Full Name"]} , we are welcome you in a Team`);
    
}
console.log(users.greeting); //[Function (anonymous)]  Function return back it is not executed right now
console.log(users.SelfIntroduction); // [Function (anonymous)]
console.log(users.SelfIntroduction());  
// Hello Harsh Dixit , we are welcome you in a Team 
//  undefined
//       "undefined"   This exceution is automatic why ?? 