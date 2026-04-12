class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

// Child class
class Admin extends User {
    constructor(username, role) {
        super(username); // parent constructor call
        this.role = role;
    }

    showRole() {
        console.log(`Role is ${this.role}`);
    }
}

const userOne = new User("harshwritescode");
userOne.logMe(); // Username is harshwritescode

const adminOne = new Admin("harsh", "admin");

adminOne.logMe();     // inherited method ✅
adminOne.showRole();  // own method ✅

//console.log(userOne.createId());  //TypeError: userOne.createId is not a function
//console.log(adminOne.createId()); //TypeError: adminOne.createId is not a function
  
// Static method is always call with class 
console.log(User.createId());   // 123
console.log(Admin.createId());  // 123 (inherit value)