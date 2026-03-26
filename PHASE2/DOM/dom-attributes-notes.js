/*
========================================
📌 DOM ATTRIBUTE + TEXT + QUERY NOTES
========================================

👉 HTML Example:
<main id="content" class="mw-body"></main>

<ul id="list">
  <li>Item 1</li>
  <li style="display:none;">Hidden Item</li>
</ul>

========================================
1. SELECTING AN ELEMENT
========================================
*/

const element = document.getElementById('content');
const list = document.getElementById('list');

console.log(element);

/*
✔ Output:
<main id="content" class="mw-body"></main>
*/

/*
========================================
1.1 QUERY SELECTOR (IMPORTANT)
========================================
*/

const firstItem = document.querySelector('#list li');     // first li
const allItems = document.querySelectorAll('#list li');   // all li

console.log(firstItem);
console.log(allItems);

/*
📌 NOTE:
- querySelector → first match
- querySelectorAll → NodeList (loop possible)
*/


/*
========================================
2. DIRECT PROPERTY ACCESS
========================================
*/

console.log(element.id);         
// ✔ "content"

console.log(element.className); 
// ✔ "mw-body"


/*
========================================
3. getAttribute()
========================================
*/

console.log(element.getAttribute('id'));    
// ✔ "content"

console.log(element.getAttribute('class')); 
// ✔ "mw-body"

/*
❌ WRONG:
element.getAttribute(id)

✔ CORRECT:
element.getAttribute('id')
*/


/*
========================================
4. setAttribute()
========================================
*/

element.setAttribute('class', 'mw-body mw-new-body');

console.log(element.className);
// ✔ "mw-body mw-new-body"


/*
========================================
5. classList (BEST PRACTICE)
========================================
*/

element.classList.add('new-class');  
element.classList.remove('mw-body'); 
element.classList.toggle('active');  

console.log(element.className);


/*
========================================
6. innerText vs textContent vs innerHTML
========================================
*/

const firstLi = document.querySelector('#list li');

/*
👉 innerText (VISIBLE ONLY)
*/
console.log(firstLi.innerText);
// ✔ "Item 1"

/*
👉 textContent (ALL TEXT)
*/
console.log(list.textContent);
// ✔ "Item 1Hidden Item"

/*
👉 innerHTML (HTML STRUCTURE)
*/
console.log(list.innerHTML);
// ✔ "<li>Item 1</li><li style='display:none;'>Hidden Item</li>"


/*
========================================
7. MODIFYING CONTENT
========================================
*/

// Change text
firstLi.innerText = "Updated Item 1";

// Add new item (not recommended way)
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
9. DIFFERENCE (IMPORTANT)
========================================

👉 innerText
- Only visible text
- Slower

👉 textContent
- All text (including hidden)
- Faster

👉 innerHTML
- Works with HTML
- Can insert tags
- Security risk (XSS)

👉 className
- Full class string
- Overwrites

👉 classList
- Add/remove/toggle (best)

========================================
10. QUICK SUMMARY
========================================

✔ getElementById → select element
✔ querySelector → first match
✔ querySelectorAll → all elements

✔ innerText → visible text
✔ textContent → all text
✔ innerHTML → HTML structure

✔ setAttribute → replace attribute
✔ classList → best practice

✔ createElement + appendChild → best way to add element

========================================
11. INTERVIEW LINE
========================================

👉 "innerText returns visible text, 
textContent returns all text, 
and innerHTML works with HTML structure."

👉 "classList is preferred over className 
for better control over classes."

========================================
*/