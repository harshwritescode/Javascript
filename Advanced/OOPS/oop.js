
// --- Object Literals --
const user ={
    //Properties
     username:"Harsh",
     logincount:8,
     signedin:true,
     
     //methods
     getuserDetails: function(){
        console.log("Got User details from database");  
        // console.log(`Username: ${this.username}`); // Harsh
        // console.log(this);  
        /*  Harsh
            8
           {
              username: 'Harsh',
             logincount: 8,
             signedin: true,
             getuserDetails: [Function: getuserDetails]
           }
   */
        
          
     }
    // ---this keyword  always tell us that the real and current context

};
// console.log(user["username"]);  // Harsh
// console.log(user.logincount);   // 8
// // console.log(user.getuserDetails()); // Got User details from database undefined 
// console.log(this); //global context mein {} this will run because it is node environment

// -----------------------------------------------------------------------------------------------------------------------------------

// Constructor Function  -- new keyword is a constructor function it will create a new instance copy
// const PromiseOne= new Promise(function (resolve,reject){

// });
// const date=new Date();

function User(username,logincount,isloogedin){
    this.username=username;
    this.logincount=logincount;
    this.isloogedin=isloogedin;

    this.gretting=function(){
        console.log(`Welcome ${this.username}`);     
    }

    return this;
}

const UserOne= new User("Harsh",9,true);
// const UserTwo= new User("Krishna",19,true);  // Override ho jayega
console.log(UserOne); // User { username: 'Harsh', logincount: 9, isloogedin: true ,gretting: [Function (anonymous)]}
// console.log(UserTwo); // User { username: 'Krishna', logincount: 19, isloogedin: true }
UserOne.gretting();  //Welcome Harsh



