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

const welcome = () => {
     let username="Harsh"
    console.log(this.username);     
}
welcome(); //undefined

const addTwo= (num1,num2) =>{
  return num1+num2;
}
console.log(addTwo(8,8)); //16 {} if you use curly braces then return keyword must be used
 
const addThree= (num1,num2) => (num1+num2); //Implicit return  number //17 () if you use this bracket then return  keyword must not  be used
console.log(addThree(8,9));

const addObjectReturn= (num1,num2) => ({username:"harsh"}); //Implicit return objects () if you use this bracket then return  keyword must not  be used
console.log(addObjectReturn(8,9)); // { username: 'harsh' }


