// ----------------------------------------  fetch('https://something.com').then().catch().finally();-------------------------------
//NOTE: The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

const PromiseOne= new Promise(function (resolve,reject){
   //Do as async task
   //DB CALLS,cryptography,netwoek call

   setTimeout(function (){
   console.log("Async Task Is Called");
   resolve();  // aab ye connect hua humre then se 
   },1000);
});  //Instance Created because this is a object

PromiseOne.then(function (){
     console.log('Promise Consumed');    
})


//-----------------------------------------------------------------------------------------------------------------------------------
new Promise(function(resolve,reject){
    setTimeout(function(){
       console.log("Async Task 2");
       resolve()
    },1000);
}).then(function(){
    console.log("Async 2 is resolved");  
})


//-----------------------------------------------------------------------------------------------------------------------------------
const Promise2=new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({userName:"harshwritescode",email:"harsh@email.com"})
   },1000)
})

//data consumption with the promises
Promise2.then(function(users){
   console.log(users);  //{ userName: 'harshwritescode', email: 'harsh@email.com' }
   
})

//-----------------------------------------------------------------------------------------------------------------------------
const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
             let error=false;
             if(!error){
               resolve({userName:"harshwritescode",email:"harsh@email.com"})
             }else{
                reject('Something went wrong');
             }

    },1000)
})
 //Impossible give us a error so we do it for chaining
PromiseFour.then((users)=>{
    console.log(users); 
    return users.userName;   
}).then(function (myuserName){
     console.log(myuserName);   
}).catch(function (error){
    console.log(error);   
}).finally(function (){
    console.log("Finally we Reached Here");
    
})

//------------------------------------------------------------------------------------------------------------------------------
const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
      let error=true;
      if(!error){
       resolve({userName:"Javascript",password:124});
      }else{
       reject("Error: Reject Went Wrong")
      }
    },1000)
});
  
async function consumePromiseFive(){
try {
     const response = await promiseFive;
   console.log(response);
} catch (error) {
    console.log(error);
    
}
}

consumePromiseFive()  
//This error originated either by 
// throwing inside of an async function
//  without a catch block, or by rejecting a 
// promise which was not handled with .catch(). 
// The promise rejected with the reason "Error: Reject Went Wrong".