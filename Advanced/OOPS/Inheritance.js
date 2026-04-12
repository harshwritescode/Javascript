class User{
     constructor(username){
        this.username=username;
     }

     logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

  addcourses(){
   console.log(`New Course wass added by ${this.username}`);
    }

}

const UserOne= new Teacher("harshwritescode","dixitharsh248@gmail.com","!235");
UserOne.addcourses();  //New Course wass added by harshwritescode
const UserTwo= new User("harshwritescode","dixitharsh248@gmail.com","!235");
//UserTwo.addcourses();  //TypeError: UserTwo.addcourses is not a function

console.log(UserOne==UserTwo); //false


