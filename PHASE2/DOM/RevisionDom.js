/*
========================================
📌 DOM INTERVIEW PREPARATION FILE
========================================

This file contains:
- DOM selection methods
- Attribute handling
- Text manipulation
- Best practices
- Interview notes

========================================
1. SELECTING ELEMENTS
========================================
*/

// Select by ID
const element = document.getElementById('content');
console.log(element);

// Select first matching element (CSS selector)
const firstItem = document.querySelector('#list li');
console.log(firstItem);

// Select all matching elements (NodeList)
const allItems = document.querySelectorAll('#list li');
console.log(allItems);

/*
NOTE:
- getElementById → fastest, only for ID
- querySelector → first match
- querySelectorAll → returns NodeList
*/


/*
========================================
2. DIRECT PROPERTY ACCESS
========================================
*/

console.log(element.id);        // "content"
console.log(element.className); // "mw-body"


/*
========================================
3. getAttribute()
========================================
*/

console.log(element.getAttribute('id'));    // "content"
console.log(element.getAttribute('class')); // "mw-body"

// Always pass attribute as string
// Wrong: element.getAttribute(id)
// Correct: element.getAttribute('id')


/*
========================================
4. setAttribute()
========================================
*/

// This overwrites existing classes
 element.setAttribute('class', 'mw-body new-class');


/*
========================================
5. classList (BEST PRACTICE)
========================================
*/

// Add class
element.classList.add('active');

// Remove class
element.classList.remove('mw-body');

// Toggle class (add/remove automatically)
element.classList.toggle('highlight');


/*
========================================
6. TEXT HANDLING
========================================
*/

const list = document.getElementById('list');
const firstLi = document.querySelector('#list li');

// innerText → only visible text
console.log(firstLi.innerText);

// textContent → includes hidden text
console.log(list.textContent);

// innerHTML → full HTML structure
console.log(list.innerHTML);


/*
========================================
7. MODIFYING CONTENT
========================================
*/

// Change text
firstLi.innerText = "Updated Item";

// Add HTML (NOT recommended)
list.innerHTML += "<li>Item 3</li>";


/*
========================================
8. BEST WAY TO ADD ELEMENT
========================================
*/

const newLi = document.createElement('li');
newLi.innerText = "Item 4 (Safe Way)";

list.appendChild(newLi);


/*
========================================
9. IMPORTANT DIFFERENCES
========================================

innerText:
- Returns only visible text
- Slower (layout calculation involved)

textContent:
- Returns all text (including hidden)
- Faster

innerHTML:
- Works with HTML
- Can insert tags
- Security risk (XSS)

className:
- Returns full class string
- Overwrites existing classes

classList:
- add(), remove(), toggle()
- Safer and preferred

*/


/*
========================================
10. INTERVIEW QUICK LINES
========================================

1. "innerText returns visible text, textContent returns all text, and innerHTML works with HTML structure."

2. "classList is preferred over className because it provides better control over classes."

3. "createElement + appendChild is the safest way to add elements to DOM."

*/


/*
========================================
11. BONUS INTERVIEW QUESTIONS (PRACTICE)
========================================
*/

// Q1: Add a new list item safely
function addItem(text) {
    const li = document.createElement('li');
    li.innerText = text;
    document.getElementById('list').appendChild(li);
}


// Q2: Toggle a class on click
function toggleActive() {
    element.classList.toggle('active');
}


// Q3: Get hidden text
function getAllText() {
    return document.getElementById('list').textContent;
}


/*
========================================
END OF FILE 🚀
========================================
*/
