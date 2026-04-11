function setusername(username){
    this.username=username;
    console.log("called");
    

}

function createuser(username,email,password){
    //setusername(username); // actually call ho rha hai lekin ye reference hold nhi kr rha hai vanished ho jata hai 
    setusername.call(this,username); // yha reference hold krke rkhta hai

    //  basically call humre function ka execution context kisi ur function ko pass kr deta hai
    this.email=email;
    this.password=password;
    
}


const userone=new createuser("harsh","dixitharsh248@gmail.com",'123');  //username set nhi hua
console.log(userone);
