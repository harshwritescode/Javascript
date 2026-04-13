class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

     get password(){
     return `${this._password}harsh`;
     }

     set password(value){
        //  this.password=value;  //  Maximum call stack size exceeded because race between the constructor and setter
        this._password=value;
     }
};

const Userone=new User("dixitharsh248@gmal.com","abcd")
console.log(Userone.password); //abcdharsh
