/* ==========================================================================
   CHAPTER 3: LOOPS & FUNCTIONS
   ========================================================================== */

// --- Topic 1: Standard For Loop ---

// console.log("--- Chapter 3: For Loop ---");
// for (let i = 1; i <= 5; i++) {
//     console.log("Number: " + i);
// } 


// --- Topic 2: For-In Loop (Objects ke keys ke liye) ---



// let marks={ali:45,ahmad:25,asghar:44};
// for(let key in marks){
//     console.log(key+" ke nmr hain:"+marks[key]);
// }

// --- Topic 3: For-Of Loop (Arrays ya Strings ki values ke liye) ---

// console.log("--- Chapter 3: For-Of Loop ---");
// let nameStr = "Muhammad Ahmad";
// for (let char of nameStr) {
//     console.log(char);
// }


// --- Topic 4: While Loop ---
/*
console.log("--- Chapter 3: While Loop ---");
let count = 1;
while (count <= 3) {
    console.log("While count: " + count);
    count++;
}
*/

// --- Topic 5: Do-While Loop (Aagay chalne se pehle kam az kam 1 baar chalta hai) ---
/*
console.log("--- Chapter 3: Do-While Loop ---");
let j = 10;
do {
    console.log("Do-While kam az kam 1 baar zaroor chalay ga, j =", j);
    j++;
} while (j < 5);
*/

// --- Topic 6: Functions & Arrow Functions ---

// console.log("--- Chapter 3: Functions ---");
// Regular Function
// function getMean(a, b, c, d, e) {
//     return (a + b + c + d + e) / 5;
// }
// console.log("Mean: " + getMean(10, 20, 30, 40, 50));

// Arrow Function
// const sum = (p, q) => p + q;
// console.log("Sum: " + sum(15, 25));



/* ==========================================================================
   CHAPTER 4: STRINGS
   ========================================================================== */

// --- Topic 1: String Syntax & Template Literals ---
/*
console.log("--- Chapter 4: String Literals & Interpolation ---");
let name1 = "Harry";
let name2 = 'Rohan';
// Backticks (Template Literal)
let sentence = `${name1} aur ${name2} dost hain`;
console.log(sentence);
*/

// --- Topic 2: Escape Sequence Characters ---

// console.log("--- Chapter 4: Escape Sequences ---");
// let text = 'Adam D\'Angelo'; // Single quote escape
// let newLineText = "Pehli Line\nDoosri Line";
// console.log(text);
// console.log(newLineText);


// // // --- Topic 3: String Methods ---

// // console.log("--- Chapter 4: String Methods ---");
// // let str = "  Harry Bhai  ";
// // console.log("Length:", str.length);
// // console.log("To UpperCase:", str.toUpperCase());
// // console.log("To LowerCase:", str.toLowerCase());
// // console.log("Slice (2 to 5):", str.slice(2, 5));
// // console.log("Replace:", str.replace("Bhai", "Bhau"));
// // console.log("Trimmed:", str.trim());
// // console.log("Includes 'Harry':", str.includes("Harry"));
// // console.log("Starts with '  H':", str.startsWith("  H"));



// /* ==========================================================================
//    CHAPTER 5: ARRAYS
//    ========================================================================== */

// // --- Topic 1: Basic Array Access & Modification ---

// // console.log("--- Chapter 5: Array Basics ---");
// // let fruits = ["Banana", "Apple", "Grapes"];
// // console.log("First element:", fruits[0]);
// // fruits[1] = "Mango"; // Changing value
// // console.log("Updated Fruits:", fruits);


// // --- Topic 2: Array Methods (pop, push, shift, unshift, join, concat, splice, slice) ---

// console.log("--- Chapter 5: Array Methods ---");
// let numArr = [10, 20, 30, 40];
// console.log("To String:", numArr.toString());
// console.log("Joined with '-':", numArr.join(" - "));

// numArr.push(50); // End mein add kare ga
// console.log("After Push:", numArr);

// numArr.pop(); // End se remove kare ga
// console.log("After Pop:", numArr);

// numArr.shift(); // Start se remove kare ga
// console.log("After Shift:", numArr);

// numArr.unshift(5); // Start mein add kare ga
// console.log("After Unshift:", numArr);

// // Splice (index, deleteCount, item1, item2...)
// numArr.splice(1, 1, 22, 23);
// console.log("After Splice:", numArr);

// // Slice (Naya array banata hai)
// let slicedArr = numArr.slice(1, 3);
// console.log("Sliced Array:", slicedArr);


// --- Topic 3: Array Loops & High-Order Functions (forEach, map, filter, reduce) ---

// console.log("--- Chapter 5: Array High-Order Methods ---");
// let numbers = [1, 2, 3, 4, 5, 10, 20];

// // forEach
// numbers.forEach((val) => console.log("Value:", val));

// // map (Naya array banata hai)
// let squared = numbers.map((val) => val * val);
// console.log("Squared Array:", squared);

// // filter (Condition match hone par naya array banata hai)
// let divisibleBy10 = numbers.filter((val) => val % 10 === 0);
// console.log("Divisible by 10:", divisibleBy10);

// // reduce (Single value mein reduce karta hai, e.g., sum ya factorial)
// let sumAll = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log("Sum using reduce:", sumAll);



/* ==========================================================================
   CHAPTER 6: JAVASCRIPT IN THE BROWSER
   ========================================================================== */
/* NOTE: Is chapter ke functions (prompt, alert, confirm, DOM) chalane ke liye 
   code ko Browser Console ya HTML file mein chalana zaroori hai. */

// --- Topic 1: Console Methods ---

// console.log("--- Chapter 6: Console Methods ---");
// console.log("Log Message");
// console.warn("Yeh ek warning hai!");
// console.error("Yeh ek error message hai!");
// console.table([{ name: "Harry", age: 25 }, { name: "Rohan", age: 22 }]);


// --- Topic 2: Interaction (alert, prompt, confirm) ---

// alert("Chapter 6 test hone laga hai!");

// let ageInput = prompt("Apni age likhein:", "18");
// let age = Number(ageInput);

// let isConfirmed = confirm("Kiya aap age submit karna chahte hain?");

// if (isConfirmed) {
//     if (age >= 18) {
//         alert("Aap drive kar sakte hain!");
//     } else if (age < 0) {
//         console.error("Age negative nahi ho sakti!");
//     } else {
//         alert("Aap abhi chote hain.");
//     }
// }


// --- Topic 3: BOM (Window & Redirection) ---
/*
let redirect = confirm("Kiya aap Google par jana chahte hain?");
if (redirect) {
    location.href = "https://www.google.com"; // Redirects page
}

*/