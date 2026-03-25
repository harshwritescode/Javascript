/*
1)Singleton Instance 
                   const twitteruser = new Object();
                   Adding the some entries in an object
twitteruser.id=1234;
twitteruser.name="Harsh Dixit";
twitteruser.age=78;

                   console.log(twitteruser);  //{ id: 1234, name: 'Harsh Dixit', age: 78 }
*/


//------------------------------------------------------------------------------------------------------------------------------
                                                //   Literal Instances (Multiple Instances )

const regularusers={
    email:"dixitharsh248@gmail.com",
    fullname:{
         userFullName:{
            firstName:"Harsh",
            lastName:"Dixit"
         }
    }
};

/* 
  1)  console.log(regularusers);  
{
  email: 'dixitharsh248@gmail.com',
  fullname: { userFullName: { firstName: 'Harsh', lastName: 'Dixit' } }
} 

  2) console.log(regularusers.fullname.userFullName.firstName);  // Harsh'
   console.log(regularusers?.fullname?.userFullName?.firstName);  //Harsh ? This is optional Chaining
    //Note:
    // Let suppose userFullName is not exist then we have facing an error so we are using the optional Chaining 

  3) const courses = {
    name:"Javascript",
    price:999,
    Instructor:"Harsh"
   }
     a)console.log(courses.Instructor);
     b) Destructing the Objects 
      const {Instructor: Teacher} = courses; //destructing the objects and change the name also
      console.log(Instructor); //Harsh
      console.log(Teacher); //Harsh

  */

 //--------------------------------------------------Basic Api ---------------------------------
 
//JSON Format -- keys and value both are in string


/*
1)
{
  "name":"Harsh",
  "coursename":"Javascript",
  "price":"free",
}
2)
{
  [],
  [],
  [],
}  
3)
{
  [],
  [
    {},
    {},
    {},
  ]

}  
*/



