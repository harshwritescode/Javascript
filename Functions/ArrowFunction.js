const user ={
    username:"Harsh Dixit",
    email:"dixitharsh248@gmail.com",
    price:999,

    welcomeMessage: function(){
     console.log(`${this.username} welcome to the website `);
     console.log(this);
     
    }
}

// user.welcomeMessage()
// console.log(user.welcomeMessage()); 
// Harsh Dixit welcome to the website 
//undefined
// user.username="Krishna"
// console.log(user.welcomeMessage()); // Krishna welcome to the website 

// console.log(this);  // {}  refer an empty object in node environment



// ---------------------------------------             this  is not used in function only used in object  -------------------------------------------
// const welcome = function (){
//      let username="Harsh"
//     console.log(this.username);     
// }
// welcome() //undefined

const welcome =  () => {
     let username="Harsh"
    console.log(this.username);     
}
welcome(); //undefined