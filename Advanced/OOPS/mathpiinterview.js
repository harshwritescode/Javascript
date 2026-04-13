// =======================
// Math.PI PROPERTY CHECK
// =======================

// Math.PI is a constant value
console.log(Math.PI); 

// Try to change it (this will NOT work)
Math.PI = 5;

console.log(Math.PI); // Still same → 3.14159... (not changed)


// Get property details (descriptor)
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

/*
Output:
{
  value: 3.141592653589793,
  writable: false,     // ❌ cannot change value
  enumerable: false,   // ❌ not visible in loops
  configurable: false  // ❌ cannot modify property settings
}
*/


// =======================
// CUSTOM OBJECT
// =======================

const User = {
    name: "Harshwritescode",
    email: "dixitharsh248@gmail.com",
    isAvailable: true,

    greeting: function () {
        console.log("Greeting Function");
    },
};


// Check descriptor of "name"
console.log(Object.getOwnPropertyDescriptor(User, "name"));

/*
Output:
{
  value: 'Harshwritescode',
  writable: true,     // ✅ value can be changed
  enumerable: true,   // ✅ will appear in loops
  configurable: true  // ✅ can modify settings
}
*/


// =======================
// MODIFY PROPERTY
// =======================

// Change property behavior
Object.defineProperty(User, "name", {
    writable: false,     // ❌ cannot update value now
    enumerable: false,   // ❌ will NOT appear in loops
    configurable: false  // ❌ cannot change again
});


// Check updated descriptor
console.log(Object.getOwnPropertyDescriptor(User, "name"));

/*
Output:
{
  value: 'Harshwritescode',
  writable: false,
  enumerable: false,   // hidden from loops
  configurable: false
}
*/


// =======================
// LOOP THROUGH OBJECT
// =======================

// Object.entries() converts object → array of [key, value]
for (let [key, value] of Object.entries(User)) {

    // Skip functions
    if (typeof value !== 'function') {
        console.log(key, value);
    }
}


/*
IMPORTANT NOTES:

1. Object is NOT directly iterable
   ❌ for (let x of User) → ERROR

2. So we use:
   ✅ Object.entries(User)
   → converts into iterable array

3. enumerable: false
   → property will NOT show in loops

4. writable: false
   → cannot change value

5. configurable: false
   → cannot redefine property
*/