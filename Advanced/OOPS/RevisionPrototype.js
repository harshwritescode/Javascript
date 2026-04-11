let myname="harsh                         ";

console.log(myname.length);  //30
console.log(myname.trim().length);// 5
console.log(myname.truelength); 

let myheros=['thor','spiderman'];

let heropower = {
    thor:"hammer",
    spiderman :"sling",
    getspiderpower: function (){
        console.log(`Spiderman power is ${this.spiderman}`);       
    }
};

//heropower.harsh() //heropower.harsh is not a function
Object.prototype.harsh =function(){
    console.log("Harsh is present in all objects");   
}

Array.prototype.heyHarsh= function(){
    console.log("Harsh is present in all Array objects"); 
} // We have given the power in array not in object

heropower.harsh();  //Harsh is present in all objects
myheros.harsh();  //Harsh is present in all objects

//heropower.heyHarsh();  //heropower.heyHarsh is not a function
myheros.heyHarsh();