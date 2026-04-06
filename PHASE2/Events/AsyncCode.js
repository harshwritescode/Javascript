/*
-----------------------------------------------------------------------------------------------------------------

  Javascript
      a) Synchronous
      b) Single Threaded      (Default)
   Execution Context
      Execution one line of code at a time
      console.log(1)                  
      console.log(2)
                          
                         Each operation waits for the last one to complete before executing

      call Stack         Memory Heap


------------------------------------------------------------------------------------------------------------------


      Blocking Code               VS       Non Blocking Code

      Block the flow of program             Does not block execution
      Read File Sync                        Read File Async

             🔥 CORE COMPONENTS (ENGINE + WEB APIs)

                ┌───────────────────────────────┐
                │         JS ENGINE             │
                │                               │
                │   ┌───────────────┐           │
                │   │ Memory Heap   │           │
                │   │ (Variables)   │           │
                │   └───────────────┘           │
                │                               │
                │   ┌───────────────┐           │
                │   │  Call Stack   │           │
                │   │               │           │
                │   │   fn()        │           │
                │   │   fn()        │           │
                │   │   Global()    │           │
                │   └───────────────┘           │
                └─────────────┬─────────────────┘
                              │
                              │ calls
                              ▼

                ┌───────────────────────────────┐
                │           WEB APIs            │
                │                               │
                │  setTimeout()                 │
                │  setInterval()                │
                │  fetch()                      │
                │                               │
                │   Register Callback           │
                └─────────────┬─────────────────┘
                              │
                              ▼

                ┌───────────────────────────────┐
                │        Callback Queue         │
                │   (Task Queue / Macro Task)   │
                │                               │
                │   [ cb ]   [ cb ]             │
                └─────────────┬─────────────────┘
                              │
                              ▼

                ┌───────────────────────────────┐
                │        Microtask Queue        │
                │   (Promises - High Priority)  │
                │                               │
                │   [ cb ]   [ cb ]             │
                └─────────────┬─────────────────┘
                              │
                              ▼

                        EVENT LOOP
              (Checks Stack → Pushes Callback)


-----------------------------------------------------------------------------------------------------------------

🔥 FLOW EXPLANATION (INTERVIEW IMPORTANT)

1) Code runs inside the JS Engine using the Call Stack (line by line)

2) When async functions are encountered:
      - setTimeout()
      - fetch()
      - setInterval()

   👉 They are NOT executed in the Call Stack
   👉 They are handed over to Web APIs

3) Web APIs:
   👉 Handle timers, network requests
   👉 Register the callback function

4) Once the task is complete:
   👉 Callback moves to:
        - Microtask Queue (Promises) 🔥 HIGH PRIORITY
        - Callback Queue (setTimeout)

5) Event Loop:
   👉 Continuously checks:
        - Is Call Stack empty?
   👉 If YES → Moves callback from queue → Call Stack

6) Then the callback gets executed


-----------------------------------------------------------------------------------------------------------------

🔥 BLOCKING vs NON-BLOCKING

Blocking Code:
   👉 Stops execution
   Example:
      fs.readFileSync()

Non-Blocking Code:
   👉 Executes in background
   Example:
      setTimeout()
      fetch()

-----------------------------------------------------------------------------------------------------------------

🔥 REAL EXAMPLE

    console.log("Start");

    setTimeout(() => {
        console.log("Timeout");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise");
    });

    console.log("End");


Execution Order:

Step 1: Start
Step 2: End
Step 3: Promise (Microtask Queue - HIGH priority)
Step 4: Timeout (Callback Queue)
 */