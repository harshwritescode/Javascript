/*******************************************************
 * ARRAYS INTERVIEW QUESTIONS (WITH COMMENTS)
 * File: arrays-interview.js
 *******************************************************/


/*
Q1. What is an Array?

An array is a data structure used to store multiple values
in a single variable. It is zero-indexed.
*/

let arr = [10, 20, 30, 40];

console.log(arr[0]); // 10 (first element)



/*
Q2. Common Array Methods
*/

let nums = [1, 2, 3];

// push → add at end
nums.push(4); // [1,2,3,4]

// pop → remove last element
nums.pop(); // [1,2,3]

// unshift → add at beginning
nums.unshift(0); // [0,1,2,3]

// shift → remove first element
nums.shift(); // [1,2,3]



/*
Q3. map()

Creates a new array by applying a function to each element.
*/

let doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2,4,6]



/*
Q4. filter()

Returns a new array with elements that satisfy condition.
*/

let even = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(even); // [2,4]



/*
Q5. reduce()

Reduces array to a single value.
*/

let sum = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10



/*
Q6. find() vs filter()

find → returns FIRST matching element
filter → returns ALL matching elements
*/

let data = [5, 10, 15, 20];

console.log(data.find(x => x > 10)); // 15
console.log(data.filter(x => x > 10)); // [15,20]



/*
Q7. forEach()

Executes a function for each element (no return value).
*/

[1, 2, 3].forEach(num => {
    console.log(num);
});



/*
Q8. Spread Operator (...)

Used to copy or merge arrays
*/

let a = [1, 2];
let b = [3, 4];

let merged = [...a, ...b];
console.log(merged); // [1,2,3,4]



/*
Q9. Destructuring
*/

let [first, second] = [100, 200, 300];
console.log(first, second); // 100 200



/*
Q10. Sorting an Array
*/

let arr2 = [5, 2, 9, 1];

// ascending
arr2.sort((a, b) => a - b);
console.log(arr2); // [1,2,5,9]

// descending
arr2.sort((a, b) => b - a);
console.log(arr2); // [9,5,2,1]



/*
Q11. Reverse Array
*/

let rev = [1, 2, 3];
rev.reverse();
console.log(rev); // [3,2,1]



/*
Q12. Remove Duplicates
*/

let dup = [1, 2, 2, 3, 3, 4];

// using Set
let unique = [...new Set(dup)];
console.log(unique); // [1,2,3,4]



/*
Q13. Flatten Array
*/

let nested = [1, [2, [3, 4]]];

// flat()
console.log(nested.flat(2)); // [1,2,3,4]



/*
Q14. Check if element exists
*/

let arr3 = [10, 20, 30];

console.log(arr3.includes(20)); // true



/*
Q15. Two Sum Problem (Important Interview Question)

Find indices of two numbers that add up to target.
*/

function twoSum(nums, target) {
    let map = {}; // store number → index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (map[complement] !== undefined) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]



/*
Q16. Kadane’s Algorithm (Maximum Subarray Sum)
*/

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6



/*
Q17. Rotate Array (Right Rotation by k)
*/

function rotateArray(nums, k) {
    k = k % nums.length;

    let part1 = nums.slice(-k);
    let part2 = nums.slice(0, nums.length - k);

    return [...part1, ...part2];
}

console.log(rotateArray([1,2,3,4,5], 2)); // [4,5,1,2,3]



/*******************************************************
 * END OF FILE
 *******************************************************/