// class User {
//     // When the object is created then it will automatically invoked
//     constructor(username ,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//      encryptPassword(){
//         return `${this.password}abc`;
//      }

//      changeusername(){
//         return `${this.username.toUpperCase()}`;
//      }
// }

// const Userone=new User("harshwritescode","dixitharsh248@gmail.com","abcd");
// console.log(Userone.encryptPassword());  //abcdabc
// console.log(Userone.changeusername());   //HARSHWRITESCODE


//Behind the scene

function User(username ,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encryptPassword =function(){
     return `${this.password}abc`;
}

User.prototype.changeusername =function(){
     return `${this.username.toUpperCase()}`;
}

const UserTwo=new User("harshwritescode","dixitharsh248@gmail.com","abcd");
console.log(UserTwo.encryptPassword()); //abcdabc

