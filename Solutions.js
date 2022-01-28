// Day 0: Hello, World!
// function greeting(parameterVariable) {
//     console.log('Hello, World!');
//     console.log(parameterVariable);
// } 


// Day 0: Data Types
// function performOperation(secondInteger, secondDecimal, secondString) {
//     const firstInteger = 4;
//     const firstDecimal = 4.0;
//     const firstString = 'HackerRank ';
//     console.log(+secondInteger + firstInteger);
//     console.log(+secondDecimal + firstDecimal);
//     console.log(firstString + secondString);
// }


// Day 1: Arithmetic Operators
// function getArea(length, width) {
//     let area;
//     area = length * width;
//     return area;
// }


// Day 1: Functions
// function factorial(n) {
//     let fac = 1;
//     for (let i = 1; i <= n; i++) {
//         fac *= i;
//     }
//     return fac;
// }


// Day 1: Let and Const
// // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
// const PI = Math.PI;
// const radius = readLine();

// // Print the area of the circle:
// console.log(PI * (radius ** 2));

// // Print the perimeter of the circle:
// console.log(2 * PI * radius);


// Day 2: Conditional Statements: If - Else
// function getGrade(score) {
//     let grade;
//     if (25 < score && score <= 30) grade = "A";
//     else if (20 < score && score <= 25) grade = "B";
//     else if (15 < score && score <= 20) grade = "C";
//     else if (10 < score && score <= 15) grade = "D";
//     else if (5 < score && score <= 10) grade = "E";
//     else if (0 <= score && score <= 5) grade = "F";
//     return grade;
// }


// Day 2: Conditional Statements: Switch
// function getLetter(s) {
//     let letter;
//     if ("aeiou".includes(s[0])) letter = "A";
//     else if ("bcdfg".includes(s[0])) letter = "B";
//     else if ("hjklm".includes(s[0])) letter = "C";
//     else if ("npqrstvwxyz".includes(s[0])) letter = "D";
//     return letter;
// }


// Day 2: Loops
// function vowelsAndConsonants(s) {
//     for (let i = 0; i < s.length; i++) {
//         if ("aeiou".includes(s[i])) {
//             console.log(s[i]);
//         }
//     }
//     for (let i = 0; i < s.length; i++) {
//         if ("aeiou".includes(s[i]) === false) {
//             console.log(s[i]);
//         }
//     }
// }


// Day 3: Arrays
// function getSecondLargest(nums) {
//     let newArr = [...new Set(nums)];
//     newArr.sort((a, b) => b - a);
//     return newArr[1];
// }


// Day 3: Try, Catch, and Finally
// function reverseString(s) {
//     try {
//         console.log(s.split("").reverse().join(""));
//     }
//     catch (error) {
//         console.log(error.message);
//         console.log(s);
//     }
// }


// Day 3: Throw
// function isPositive(a) {
//     if (a > 0) return "YES";
//     else if (a === 0) throw new Error("Zero Error");
//     else if (a < 0) throw new Error("Negative Error");
// }


// Day 4: Create a Rectangle Object
// function Rectangle(a, b) {
//     return { length: a, width: b, perimeter: 2 * (a + b), area: a * b };
// }


// Day 4: Count Objects
// function getCount(objects) {
//     let count = 0;
//     objects.forEach(o => o.x == o.y ? count++ : null);
//     return count;
// }


// Day 4: Classes
// class Polygon {
//     constructor(lengths) {
//         this.lengths = lengths;
//     }
//     perimeter() {
//         return this.lengths.reduce((a, b) => a + b, 0);
//     }
// }


// Day 5: Inheritance
// Rectangle.prototype.area = function () {
//     return (this.w * this.h);
// }

// class Square extends Rectangle {
//     constructor(length) {
//         super(length);
//         this.w = length;
//         this.h = length;
//     }
// }


// Day 5: Template Literals
// function sides(literals, ...expressions) {
//     const [area, perimeter] = expressions;
//     const s1 = (perimeter + Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;
//     const s2 = (perimeter - Math.sqrt((perimeter * perimeter) - (16 * area))) / 4;
//     return [s1, s2].sort((a, b) => a - b);
// }


// Day 5: Arrow Functions
// function modifyArray(nums) {
//     return nums.map(num => num % 2 === 0 ? num * 2 : num * 3);
// }


// Day 6: Bitwise Operators
// function getMaxLessThanK(n, k) {
//     let max = 0;

//     for (let a = 1; a < n; a++) {
//         for (let b = a + 1; b <= n; b++) {
//             if ((a & b) < k && (a & b) > max) {
//                 max = a & b;
//             }
//         }
//     }
//     return max;
// }


// Day 6: JavaScript Dates
// function getDayName(dateString) {
//     const dateArr = dateString.split("/");
//     const date = new Date(dateArr[2], dateArr[0] - 1, dateArr[1]);
//     let dayName;
//     switch (date.getDay()) {
//         case 0:
//             dayName = "Sunday";
//             break;
//         case 1:
//             dayName = "Monday";
//             break;
//         case 2:
//             dayName = "Tuesday";
//             break;
//         case 3:
//             dayName = "Wednesday";
//             break;
//         case 4:
//             dayName = "Thursday";
//             break;
//         case 5:
//             dayName = "Friday";
//             break;
//         case 6:
//             dayName = "Saturday";
//     }

//     return dayName;
// }


// Day 7: Regular Expressions I
// function regexVar() {
//     const re = /^([aeiou]).*\1$/;
//     return re;
// }


// Day 7: Regular Expressions II
// function regexVar() {
//     const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$/;
//     return re;
// }


// Day 7: Regular Expressions III
// function regexVar() {
//     const re = /\d+/g;
//     return re;
// }


// Day 8: Create a Button

// index.html
//     < !DOCTYPE html >
//         <html>
//             <head>
//                 <link rel="stylesheet" href="css/button.css" type="text/css">
//             </head>

//             <body>
//                 <button id="btn">0</button>
//                 <script src="js/button.js" type="text/javascript"></script>
//             </body>
//         </html>

// button.css
// #btn {
//     width: 96px;
//     height: 48px;
//     font - size: 24px;
// }

// button.js
// const button = document.getElementById("btn");

// button.addEventListener("click", clickHandler);

// function clickHandler(e) {
//     let button = e.target;
//     button.innerHTML = +button.innerHTML + 1;
// }


// Day 8: ButtonsContainer

// index.html
//     < !DOCTYPE html >
//         <html>
//             <head>
//                 <link rel="stylesheet" href="css/buttonsGrid.css" type="text/css">
//             </head>

//             <body>
//                 <div id="btns">
//                     <button id="btn1">1</button>
//                     <button id="btn2">2</button>
//                     <button id="btn3">3</button>
//                     <button id="btn4">4</button>
//                     <button id="btn5">5</button>
//                     <button id="btn6">6</button>
//                     <button id="btn7">7</button>
//                     <button id="btn8">8</button>
//                     <button id="btn9">9</button>
//                 </div>
//                 <script src="js/buttonsGrid.js" type="text/javascript"></script>
//             </body>
//         </html>

// buttonsGrid.css
// #btns {
//     width: 75 %;
// }

// button {
//     width: 30 %;
//     height: 48px;
//     font - size: 24px;
// }

// buttonsGrid.js
// const button5 = document.getElementById("btn5");
// const button1 = document.getElementById("btn1");
// const button2 = document.getElementById("btn2");
// const button3 = document.getElementById("btn3");
// const button4 = document.getElementById("btn4");
// const button6 = document.getElementById("btn6");
// const button7 = document.getElementById("btn7");
// const button8 = document.getElementById("btn8");
// const button9 = document.getElementById("btn9");
// const quee = [1, 4, 7, 8, 9, 6, 3, 2, 1];
// const buttons = [button1, button2, button3, button4, button6, button7, button8, button9];

// button5.addEventListener("click", clickHandler);

// function clickHandler() {
//     for (let i = 0; i < buttons.length; i++) {
//         for (let j = 0; j < quee.length; j++) {
//             if (buttons[i].innerHTML == quee[j]) {
//                 buttons[i].innerHTML = quee[j + 1];
//                 break;
//             }
//         }
//     }
// }