/*******************************************************
 * 🔥 FETCH + PROMISE (EASY EXPLANATION)
 *******************************************************/

/*
👉 What does fetch do?

- fetch is a Web API (works in browser / Node)
- It sends a network request
- It immediately returns a Promise

IMPORTANT:
👉 fetch does NOT return data directly
👉 It returns a Promise (future value)
*/


// STEP 1: Call fetch
const responsePromise = fetch('https://api.github.com/users/harshwritescode');

/*
👉 What happens internally?

fetch()
   ↓
Promise created (state: PENDING)
   ↓
Network request goes in background

Promise has 2 internal queues:
-----------------------------------
onfulfilled[] → for success (.then)
onrejected[]  → for error (.catch)

⚠️ IMPORTANT:
We cannot get value directly
Because network takes time (async)
*/


// STEP 2: Handle the Promise
responsePromise
    .then(function (response) {

        /*
        ✅ This runs when:
        - Server sends a response (200, 404, etc.)

        ❌ This does NOT run when:
        - Network fails
        */

        console.log("Response object:");
        console.log(response);

        console.log(typeof response); // object

        /*
        👉 This is NOT actual data
        This is a Response object

        It contains:
        - status (200, 404, etc.)
        - headers
        - body (in stream form)
        */

        console.log("Status:", response.status);
        console.log("OK:", response.ok);

        /*
        👉 To get actual data:
        use response.json()

        ⚠️ IMPORTANT:
        response.json() also returns a Promise
        */

        return response.json();
    })
    .then(function (data) {

        /*
        ✅ Now we get actual data (JSON parsed)

        This runs when JSON parsing is successful
        */

        console.log("Actual Data:");
        console.log(data);

        console.log(typeof data); // object

    })
    .catch(function (error) {

        /*
        ❌ This runs only when:

        - No internet
        - Server unreachable
        - DNS error
        - OR we manually throw error

        ⚠️ NOTE:
        404 / 500 does NOT come here by default
        */

        console.log("Error:");
        console.log(error);
    });




/*******************************************************
 * 🔥 404 CASE (IMPORTANT)
 *******************************************************/

fetch('https://api.github.com/invalid-url') // will return 404
    .then(function (response) {

        console.log("THEN runs even for 404");
        console.log(response.status); // 404
        console.log(response.ok);     // false

        /*
        👉 fetch treats 404 as a valid response
        So it goes to .then() (onfulfilled)
        */

        // 👇 If you want to treat it as error
        if (!response.ok) {
            throw new Error("API Error (404)");
        }

        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {

        /*
        ✅ Now catch runs (because we threw error)
        */

        console.log("Catch block:");
        console.log(error.message);
    });




/*******************************************************
 * 🔥 INTERNAL FLOW (SIMPLE)
 *******************************************************/

/*
fetch()
   ↓
Promise (PENDING)
   ↓
Network request (background)
   ↓
Did response come?
   ↓

YES (even 404, 500)
   ↓
.then() runs

NO (network error)
   ↓
.catch() runs
*/




/*******************************************************
 * 🔥 KEY POINTS (REMEMBER)
 *******************************************************/

/*
1. fetch always returns a Promise
2. response is NOT actual data
3. response.json() → gives actual data (Promise)
4. 404 / 500 → goes to .then()
5. Only network error → goes to .catch()
6. Because async → no direct return value
*/




/*******************************************************
 * 🔥 SHORT CLEAN CODE
 *******************************************************/

fetch('https://api.github.com/users/harshwritescode')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));




/*******************************************************
 * 🔥 ASYNC/AWAIT (BEST PRACTICE)
 *******************************************************/

async function getData() {
    try {
        const response = await fetch('https://api.github.com/users/harshwritescode');

        if (!response.ok) {
            throw new Error("API Error");
        }

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getData();