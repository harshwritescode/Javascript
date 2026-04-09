/*******************************************************
 * PROMISES INTERVIEW QUESTIONS (WITH COMMENTS)
 * File: promises-interview.js
 *******************************************************/


/*
Q1. What is a Promise in JavaScript?

A Promise is an object that represents the eventual 
completion (or failure) of an asynchronous operation.
It has 3 states:
1. pending
2. fulfilled
3. rejected
*/

// Example:
const promiseExample = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});

promiseExample
    .then(result => console.log(result)) // runs if resolved
    .catch(error => console.log(error)); // runs if rejected



/*
Q2. How does .then() work?

.then() is used to handle the resolved value of a promise.
It returns a new promise, enabling chaining.
*/

Promise.resolve(10)
    .then(value => {
        console.log("First then:", value);
        return value * 2;
    })
    .then(value => {
        console.log("Second then:", value);
    });



/*
Q3. What is .catch()?

.catch() is used to handle errors in a promise chain.
*/

Promise.reject("Error occurred")
    .catch(error => {
        console.log("Caught error:", error);
    });



/*
Q4. What is .finally()?

.finally() runs regardless of promise result (success/failure).
*/

Promise.resolve("Done")
    .finally(() => {
        console.log("Always runs");
    });



/*
Q5. What is Promise chaining?

It means executing multiple async operations sequentially.
*/

new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
})
.then(num => {
    console.log("Step 1:", num);
    return num + 5;
})
.then(num => {
    console.log("Step 2:", num);
    return num * 2;
})
.then(num => {
    console.log("Step 3:", num);
});



/*
Q6. Difference between Promise.all and Promise.race?

Promise.all:
- Waits for all promises to resolve
- Fails if ANY promise rejects

Promise.race:
- Returns result of the FIRST settled promise
*/

const p1 = new Promise(res => setTimeout(() => res("P1"), 1000));
const p2 = new Promise(res => setTimeout(() => res("P2"), 2000));

Promise.all([p1, p2]).then(res => {
    console.log("Promise.all:", res);
});

Promise.race([p1, p2]).then(res => {
    console.log("Promise.race:", res);
});



/*
Q7. What is Promise.allSettled()?

It waits for all promises and returns their results
(regardless of success or failure).
*/

const p3 = Promise.resolve("Success");
const p4 = Promise.reject("Failed");

Promise.allSettled([p3, p4])
    .then(results => {
        console.log("allSettled:", results);
    });



/*
Q8. What is Promise.any()?

- Returns the first fulfilled promise
- Ignores rejected ones
- Fails only if ALL promises fail
*/

Promise.any([
    Promise.reject("Error1"),
    Promise.resolve("Success1"),
    Promise.resolve("Success2")
])
.then(result => {
    console.log("Promise.any:", result);
});



/*
Q9. How to create a delay using Promise?
*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => {
    console.log("Executed after 1 second");
});



/*
Q10. Convert callback to Promise (Promisify)

Old callback style:
*/

function callbackFunction(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

// Convert to Promise:
function promiseFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

promiseFunction().then(data => console.log(data));



/*
Q11. Error handling in chained promises
*/

Promise.resolve(10)
    .then(val => {
        throw new Error("Something went wrong");
    })
    .then(val => {
        console.log(val); // skipped
    })
    .catch(err => {
        console.log("Handled Error:", err.message);
    });



/*
Q12. Async/Await (built on Promises)

Cleaner way to write promise-based code
*/

async function asyncExample() {
    try {
        let result = await Promise.resolve("Async result");
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

asyncExample();



/*******************************************************
 * END OF FILE
 *******************************************************/