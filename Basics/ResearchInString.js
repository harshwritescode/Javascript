var paragraph = new String('A paragraph is a self-contained unit of writing');


let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 7];

let common = arr1.filter(num => !arr2.includes(num));
console.log(common);


/*
a)

console.table([paragraph]);
console.log(typeof paragraph);
console.log(`This is the final Paragraph : "${paragraph}" `); 

┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ (index) │ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ 6   │ 7   │ 8   │ 9   │ 10  │ 11  │ 12  │ 13  │ 14  │ 15  │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │ 31  │ 32  │ 33  │ 34  │ 35  │ 36  │ 37  │ 38  │ 39  │ 40  │ 41  │ 42  │ 43  │ 44  │ 45  │ 46  │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│ 0       │ 'A' │ ' ' │ 'p' │ 'a' │ 'r' │ 'a' │ 'g' │ 'r' │ 'a' │ 'p' │ 'h' │ ' ' │ 'i' │ 's' │ ' ' │ 'a' │ ' ' │ 's' │ 'e' │ 'l' │ 'f' │ '-' │ 'c' │ 'o' │ 'n' │ 't' │ 'a' │ 'i' │ 'n' │ 'e' │ 'd' │ ' ' │ 'u' │ 'n' │ 'i' │ 't' │ ' ' │ 'o' │ 'f' │ ' ' │ 'w' │ 'r' │ 'i' │ 't' │ 'i' │ 'n' │ 'g' │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
object

This is the final Paragraph : "A paragraph is a self-contained unit of writing" 

b)
var newparagraph = 'Paragraphs organize longer texts, providing structure, unity, and readability. ';
console.table([newparagraph,typeof newparagraph]);

┌─────────┬───────────────────────────────────────────────────────────────────────────────────┐
│ (index) │ Values                                                                            │
├─────────┼───────────────────────────────────────────────────────────────────────────────────┤
│ 0       │ 'Paragraphs organize longer texts, providing structure, unity, and readability. ' │
│ 1       │ 'string'                                                                          │
└─────────┴───────────────────────────────────────────────────────────────────────────────────┘
******************************************************************************************************************************************************************
c)
🔹 What is at()?
        at() is a safe indexing method to access elements from:
        Array,String,TypedArray
        It supports positive and negative indexes.

        at() allows accessing elements using negative indexing in arrays and strings, which is not possible with bracket notation.

 1)let arr = [10, 20, 30, 40];
console.table([arr[3],arr[-1]]);  

┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 40        │
│ 1       │ undefined │
└─────────┴───────────┘   

2)let arr = [10, 20, 30, 40];
console.table([arr[0],arr[-1],arr.at(-1)]);

┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ 10        │
│ 1       │ undefined │
│ 2       │ 40        │
└─────────┴───────────┘

3)let name = "Harsh";
console.table([name.at(0),name.at(-2)]);

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 'H'    │
│ 1       │ 's'    │
└─────────┴────────┘

Note:  Comparison with old traditional way
    arr[arr.length - 1]; // old    ||          arr.at(-1);          // modern & clean

*******************************************************************************************************************************************************************************    
🔹 What is big()?

big() is a String HTML wrapper method.
It returns a string wrapped inside the <big> HTML tag, which displays text one font size larger.

let text = "Hello";                   |         let text = new String('Hello');
console.log(text.big());              |         console.log(text.big()); 

Output should be same in both way :  <big>Hello</big>
Note:
1)bold()     // <b>     <b>Hello</b>
2)italics()  // <i>      <i> Hello  </i>
3)small()    // <small>   <small>Hello</small>
4)fontcolor()      <font color="red">Hello</font>
5)fontsize()        <font size="5">Hello</font>    (sizerange 1 to 7)

Combined Example:
       document.body.innerHTML =
      "Harsh".bold().italics().fontcolor("green").fontsize(5);


      <font size="5" color="green">
        <i><b>Harsh</b></i>
      </font>
**************************************************************************************************************************************************************************
🔹 What is concat()?
  concat() combines values and returns a new string/array without mutating the original. 
   It does not mutate the original array; it returns a new array, so the operation is immutable.
 
  
1)var value=[1,2].concat([3,4]); // same result
console.log(value);   //it return the string   [ 1, 2, 3, 4 ]

2)let arr=[1,2]
var value=arr.concat([3,4]); // same result
console.log(arr);                     //  [ 1, 2 ]
console.log(value);                   //  [ 1, 2, 3, 4 ]

3)let FirstName=new String('Harsh ');
let LastName=new String('Dixit');

let result=FirstName.concat(LastName);
console.table([result,FirstName,LastName]);

┌─────────┬─────┬─────┬─────┬─────┬─────┬─────┬───────────────┐
│ (index) │ 0   │ 1   │ 2   │ 3   │ 4   │ 5   │ Values        │
├─────────┼─────┼─────┼─────┼─────┼─────┼─────┼───────────────┤
│ 0       │     │     │     │     │     │     │ 'Harsh Dixit' │
│ 1       │ 'H' │ 'a' │ 'r' │ 's' │ 'h' │ ' ' │               │
│ 2       │ 'D' │ 'i' │ 'x' │ 'i' │ 't' │     │               │
└─────────┴─────┴─────┴─────┴─────┴─────┴─────┴───────────────┘

NOTE: Return a new String and Operation is mutable

Q)If we want to string mutuable   what to do ?? 

we use push() in js only for array

let FirstName=new String('Harsh ');  //String object wrapper
let LastName=new String('Dixit');
FirstName.push(LastName);
console.log(FirstName);           // TypeError: FirstName.push is not a function

*****************************************************************Listen Push() method always used in array not in string*****************************************************************
let arr=[1,2]
arr.push(3,4);
console.log(arr);     //[ 1, 2, 3, 4 ]


🔹 What is charAt()?

charAt() returns one UTF-16 character at a given index.
If index is invalid, it returns empty string, not undefined.


charAt() is a method that find out the character with the references of their indexes.
It always start with 0
If you are finding the charcter out of the string limit (0 to str.length -1) so you always receive " " empty string.

let str="Harsh";
console.table([str,str.charAt(0),str.charAt(1),str.charAt(2),str.charAt(3),str.charAt(4),str.charAt(5),str.charAt(6)]);

┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 'Harsh' │  //Display whole String
│ 1       │ 'H'     │  // Display first character
│ 2       │ 'a'     │  // Display second character
│ 3       │ 'r'     │  // Display third character
│ 4       │ 's'     │  // Display fourth character
│ 5       │ 'h'     │  // Display fifth character   (out of range)
│ 6       │ ''      │  // Display sixth character   (out of range)
│ 7       │ ''      │
└─────────┴─────────┘

Note: str.charAt(-1)   //""
If there is an array method [] notation
let str= "Harsh";
console.log(str[1]); //a                     console.log(str[6])  //undefined
console.log(str.charAt(1)); //a              console.log(str.charAt(6))  "" 


🔹 What is charCodeAt()?

charCodeAt() returns the UTF-16 numeric code of the character at the specified index.
If index is invalid, it returns NaN.

let str="Harsh";
console.table([str,str.charCodeAt(0),str.charCodeAt(1),str.charCodeAt(2),str.charCodeAt(3),str.charCodeAt(4),str.charCodeAt(5),str.charCodeAt(6)]);

┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│ 0       │ 'Harsh' │
│ 1       │ 72      │
│ 2       │ 97      │
│ 3       │ 114     │
│ 4       │ 115     │
│ 5       │ 104     │
│ 6       │ NaN     │
│ 7       │ NaN     │
└─────────┴─────────┘


🔹 What is endWith()?

endsWith() checks whether a string ends with a given substring and returns a boolean value.

let str = "javascript";

console.log(str.endsWith("script")); // true
console.log(str.endsWith("java"));   // false

Optional length parameter :  str.endWith("substring",length);  // It means you have to consider the string at that length only
let str = "javascript"
console.table([str.endsWith("java",0),str.endsWith("java",1),str.endsWith("java",2),str.endsWith("java",3),str.endsWith("java",4),str.endsWith("java",5),str.endsWith("java",6),str.endsWith("java",7),str.endsWith("java",8),str.endsWith("java",9),str.endsWith("java",10),str.endsWith("java",11)])

┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ false  │
│ 1       │ false  │
│ 2       │ false  │
│ 3       │ false  │
│ 4       │ true   │
│ 5       │ false  │
│ 6       │ false  │
│ 7       │ false  │
│ 8       │ false  │
│ 9       │ false  │
│ 10      │ false  │
│ 11      │ false  │
└─────────┴────────┘


          Real life time 
let file="temp.pdf";

if(file.endsWith("pdf"))  {
   console.log("This is pdf file")
}

Note: This is case senstive pdf,Pdf in pdf return true and Pdf return False
and if you add the substring empty then it always return true

🔹 startsWith() se relation
Method	Check
startsWith()	beginning
endsWith()	ending

🔹 What is includes()?
 includes() checks whether a substring exists inside a string and returns a boolean.


 string.includes(searchString, startIndex?)

1)
let str = "Harsh Dixit please add some details in page";
console.log(str.includes("ple")); // true
console.log(str.includes("adda")); // false (case-sensitive)

2)  find out single character also
let str = "Harsh Dixit please add some details in page";
console.log(str.includes("y")); // true
console.log(str.includes("a")); // false (case-sensitive)

3)
startIndex (optional)
let str = "Harsh Dixit please add some details in page";
console.log(str.includes("harsh",0)); // true
console.log(str.includes("arsh",1)); // false (case-sensitive)

4)  Real Time Sceanrio

let email =" harsh@gmail.com";

if(email.includes("@")){
  console.log("This is valid email");
}
else{
   console.log("This is not valid email");
}

**********************************

let arr = ["apple", "banana", "mango"];

let value = arr.filter(item => item.includes("an"));
console.log(value);

***********************************
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 7];

let common = arr1.filter(num => !arr2.includes(num));
console.log(common);  // [ 1, 2, 5 ]

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 7];

let common = arr1.filter(num => arr2.includes(num));
console.log(common);  // [ 3, 4 ]

*/