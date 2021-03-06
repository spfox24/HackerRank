// /**
// *   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
// *   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
// *
// *	Parameter:
// *   parameterVariable - A string of text.
// **/

// const parameterVariable = 'Welcome to 10 Days of JavaScript!'

// function greeting(parameterVariable) {
//     // This line prints 'Hello, World!' to the console:
//     console.log('Hello, World!');
//     // Write a line of code that prints parameterVariable to stdout using console.log:
//     console.log(parameterVariable);
// };

// /**
// *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
// *   Print three lines:
// *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
// *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
// *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
// *
// *	Parameter(s):
// *   secondInteger - The string representation of an integer.
// *   secondDecimal - The string representation of a floating-point number.
// *   secondString - A string consisting of one or more space-separated words.
// **/

// const secondInteger = parseInt(12);
// const secondDecimal = parseFloat(4.32);
// const secondString = 'is the best place to learn and practice coding!';

// function performOperation(secondInteger, secondDecimal, secondString) {
//     // Declare a variable named 'firstInteger' and initialize with integer value 4.
//     const firstInteger = 4;
    
//     // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
//     const firstDecimal = 4.0;
    
//     // Declare a variable named 'firstString' and initialize with the string "HackerRank".
//     const firstString = 'HackerRank ';
    
//     // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
//     console.log(firstInteger + parseInt(secondInteger));
    
//     // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
//     console.log(firstDecimal + parseFloat(secondDecimal));
    
//     // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
//     console.log(firstString + secondString);
// }

// /**
// *   Calculate the area of a rectangle.
// *
// *   length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the rectangle's area.
// **/

// const length = 3;
// const width = 4.5;

// function getArea(length, width) {
//     let area;
//     // Write your code here
//     area = (length*width);
//     return area;
// }

// /**
// *   Calculate the perimeter of a rectangle.
// *	
// *	length: The length of the rectangle.
// *   width: The width of the rectangle.
// *   
// *	Return a number denoting the perimeter of a rectangle.
// **/
// function getPerimeter(length, width) {
//     let perimeter;
//     // Write your code here
//     perimeter = (length+width)*2;
//     return perimeter;
// }

// /*
//  * Complete the vowelsAndConsonants function.
//  * Print your output using 'console.log()'.
//  */

// const s = 'javascriptloops';

// function vowelsAndConsonants(s) {
//     const vowels = 'aeiou';
//     let consonants = '';

//     for(let i = 0; i < s.length; i++) {
//         if (vowels.includes(s[i])) {
//             console.log(s[i]);
//         } else {
//             consonants += s[i] + '\n';
//         }
//     }
//     console.log(consonants.trim());
// }

// const n = 4;

// function factorial(n) {
//     if(n === 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };

// function main() {
//     // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
//     let r = 2.6;

//     const PI = Math.PI;
//     const area = (PI * Math.pow(r, 2));
//     const perimeter = (2 * PI * r);

//     // Print the area of the circle:
//     console.log(area);
//     // Print the perimeter of the circle:
//     console.log(perimeter);
// };

// function getGrade(score) {
//     let grade;
//     // Write your code here
//     if (score > 25 && score <= 30) {
//         grade = 'A';
//     } else if (score > 20 && score <= 25) {
//         grade = 'B';
//     } else if (score > 15 && score <= 20) {
//         grade = 'C';
//     } else if (score > 10 && score <= 5) {
//         grade = 'D';
//     } else if (score > 5 && score <= 10) {
//         grade = 'E';
//     } else {
//         grade = 'F';
//     }

//     return grade;
// }

// function getLetter(s) {
//     let letter;
//     // Write your code here
//     switch(true) {
//         case 'aeiou'.includes(s[0]):
//             letter = 'A';
//             break;
//         case 'bcdfg'.includes(s[0]):
//             letter = 'B';
//             break;
//         case 'hjklm'.includes(s[0]):
//             letter = 'C';
//             break;
//         default:
//             letter = 'D';
//     }
//     return letter;
// }

// /**
// *   Return the second largest number in the array.
// *   @param {Number[]} nums - An array of numbers.
// *   @return {Number} The second largest number in the array.
// **/

// function getSecondLargest(nums) {
//     // Complete the function
//     let largest = nums[0];
//     let secondLargest = nums[0];

//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] > largest) {
//             secondLargest = largest;
//             largest = nums[i];
//         }
//         if ((nums[i] > secondLargest) && (nums[i] < largest)) {
//             secondLargest = nums[i];
//         }
//     }
//     return secondLargest;
// }



// /*
//  * Complete the reverseString function
//  * Use console.log() to print to stdout.
//  */
// function reverseString(s) {
//     try {
//         s = s.split('').reverse().join('');
//     } catch(error) {
//         console.log(error.message);
//     } finally {
//         console.log(s);
//     };
// };

// /*
//  * Complete the isPositive function.
//  * If 'a' is positive, return "YES".
//  * If 'a' is 0, throw an Error with the message "Zero Error"
//  * If 'a' is negative, throw an Error with the message "Negative Error"
//  */

// function isPositive(a) {
//     if (a > 0) {
//         return 'YES';
//     } else {
//         throw(a === 0 ? new Error('Zero Error') : new Error('Negative Error'));
//     };
// };

// /*
//  * Complete the Rectangle function
//  */
// function Rectangle(a, b) {
//     this.length = a;
//     this.width = b;
//     this.perimeter = 2 * (a + b);
//     this.area = a * b;
// }

// /*
//  * Return a count of the total number of objects 'o' satisfying o.x == o.y.
//  * 
//  * Parameter(s):
//  * objects: an array of objects with integer properties 'x' and 'y'
//  */
// function getCount(objects) {
//     let n = 0;
//     for(let o of objects) {
//         n += (o.x == o.y);
//     };
//     return n;
// };

// /*
//  * Complete the 'pageCount' function below.
//  *
//  * The function is expected to return an INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER n
//  *  2. INTEGER p
//  */

// function pageCount(n, p) {
//     /*
//         n: number of pages in book
//         p: page number to turn to
//     */
//    let pageTurns =  Math.floor(p / 2);
//    let totalTurns = Math.floor(n / 2);

//    // Return the total number of page turns it takes to get to a page, or how many it requires if starting in back
//    return Math.min(pageTurns, totalTurns - pageTurns);

// }

// /*
//  * Implement a Polygon class with the following properties:
//  * 1. A constructor that takes an array of integer side lengths.
//  * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
//  */

// class Polygon {
//     constructor(sides) {
//         this.sides = sides;
//     };
//     perimeter() {
//         return this.sides.reduce(function(a, b) {
//             return a + b;
//         });
//     };
// };

// const rectangle = new Polygon([10, 20, 10, 20]);
// const square = new Polygon([10, 10, 10, 10]);
// const pentagon = new Polygon([10, 20, 30, 40, 43]);

// console.log(rectangle.perimeter());
// console.log(square.perimeter());
// console.log(pentagon.perimeter());

// class Rectangle {
//     constructor(w, h) {
//         this.w = w;
//         this.h = h;
//     }
// }

// /*
//  *  Write code that adds an 'area' method to the Rectangle class' prototype
//  */
// Rectangle.prototype.area = function() {
//     let area = this.w * this.h;
//     return area;
// };

// /*
//  * Create a Square class that inherits from Rectangle and implement its class constructor
//  */

// class Square extends Rectangle {
//     constructor(s) {
//         super(s, s);
//         this.h = s;
//         this.w = s;
//     };
// };





/* CODE WITH MOSH */

// **Variables**
// ex. let name = 'Steven';

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with number
// Cannot contain a space or hyphen (Camel Case)
// Are case sensitive

// **Primitive/Value Type**
// String: let name = 'Steven'; <--String Literal
// Number: let age = 34; <--Number Literal
// Boolean: let isApproved = true(false); <--Boolean Literal
// Undefined: let firstName;
// Null: let selectedColor = null; (Set to clear value of variable)

// **Objects**
/*
// Object Literal
let person = {
    name: 'Steven',
    age: 34
};
// Dot Notation
// person.name = 'Fox';

// Bracket Notation
person['name'] = 'Perry';

console.log(person);
console.log(person.name);
*/

// **Arrays**
// let selectedColors = ['red', 'blue'];
// selectedColors[2] = 'green';
// console.log(selectedColors[0]);
// console.log(selectedColors.length);

// **Functions**


/*
function greet(parameter) {
    statement;
}
greet(argument);

// Performing a task
function greet(name, lastName) {
    console.log('Hello' + name + ' ' + lastName);
}

greet('Steven', 'Perry');
greet('Fox');

// Calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));
*/

// **Operators**
/*
Arithmetic Operators:
let x = 10;
let y = 3;

console.log(x + y); - Addition
console.log(x - y); - Subtraction
console.log(x * y); - Multiplication
console.log(x / y); - Division
console.log(x % y); - Remainder of Division
console.log(x ** y); - x to the Power of y
console.log(x++); - Increment(++)
console.log(--x); - Decrement(--)
/*

/*
Assignment Operators:
let x = 10;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;
*/

/*
Comparison Operators:
let x = 1;

// Relational
console.log(x > 0);
console.log(x >= 1);
console.log(x < 1);
console.log(x <= 1);

// Equality
console.log(x === 1);
console.log(x !== 1);
*/

/*
Equality Operators:
// Strict Equality
console.log(1 === 1); - True
console.log(1 === '1'); - False

// Loose Equality
console.log(1 == 1); - True
console.log(1 == '1'); - True
console.log(true == 1); - True
*/

/*
Ternary Operator:
If a customer has more than 100 points,
they are a 'gold' customer, otherwise,
they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type); - gold
*/

/*
Logical Operators:
// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);-->TRUE
console.log(false && true);-->FALSE

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan)--> TRUE

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan) --> TRUE

// NOT (!)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let applicationRefused = !eligibleForLoan;
console.log('Eligible', eligibleForLoan)--> FALSE
console.log('Application Refused', applicationRefused)--> TRUE
*/

/*
Logical Operators with Non-booleans:
// Falsy (false):
undefined
null
0
false
''
NaN

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);--> red
*/


/*
Operators Precedence:
let x = 2 + 3 * 4;
console.log(x);--> 14
let x = (2 + 3) * 4;
console.log(x);--> 20
*/

/*
let a = 'red';
let b = 'blue';
let c = a;
a = b;
b = c;


console.log(a);
console.log(b);
*/


// If/else

// let hour = 6;

// if(hour >= 6 && hour < 12) {
//     console.log('Good Morning!');
// } else if(hour >= 12 && hour < 18) {
//     console.log('Good Afternoon!');
// } else {
//     console.log('Good Evening!');
// };

// Switch/case

// let role = 'guest';

// if(role === 'guest') {
//   console.log('Guest User');
// } else if(role === 'moderator') {
//   console.log('Moderator User')
// } else {
//   console.log('Unknown User');
// }

// switch(role) {
//   case 'guest':
//     console.log('Guest User');
//     break;
  
//   case 'moderator':
//     console.log('Moderator User');
//     break;
  
//   default:
//     console.log('Unknown User');
// }

//*** FOR LOOP ***
/*
    for(initialExpression; condition; incrementExpression) {
      statement
    }
*/
// for(let i = 1; i <= 5; i++) {
//   if(i % 2 !== 0) console.log(i);
// }

//*** WHILE LOOP ***
/*
  while(condition) {
    statement
    incrementExpression
  }
*/
// let i = 0;

// while(i <= 5) {
//   if(i % 2 !== 0) console.log(i);
//   i++;
// };

//*** DO-WHILE LOOP ***

// let i = 9;

// do {
//   if(i % 2 !== 0) console.log(i);
//   i++;
// } while(i <= 5);

//*** FOR-IN LOOP ***

// Dot Notation
// person.name

// Bracket Notation
// person['name']

// const person = {
//   name: 'Steven',
//   age: 34
// };

// for(let key in person) {
//   console.log(key, person[key]);
// };

// const colors = ['red', 'green', 'blue'];

// for(let index in colors) {
//   console.log(index, colors[index]);
// };

//*** FOR-OF LOOP ***

// const colors = ['red', 'green', 'blue'];

// for(let color of colors) {
//   console.log(color);
// };

// let i = 0;

// while(i <= 10) {
//   // if(i === 5) break;
//   if(i % 2 === 0) {
//     i++;
//     // continue;
//   };
//   console.log(i);
//   i++;
// };


//*** EXERCISE 1 - MAX OF TWO NUMBERS ***

// let number = maxNum(7, 6);
// console.log(number);

// function maxNum(a, b) {
//   if(a > b) {
//     return a;
//   } else {
//     return b;
//   };
// };

// function maxNum(a, b) {
//   return (a > b) ? a : b;
// };

//*** EXERCISE 2 - LANDSCAPE OR PORTRAIT ***

// console.log(isLandscape(6, 3));

// function isLandscape(width, height) {
//   // return true if width > height : return false
//   if(width > height) {
//     return true;
//   } else {
//     return false;
//   };
// };

// function isLandscape(width, height) {
//   return (width > height);
// };

//*** EXERCISE 3 - FIZZBUZZ ***

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 & 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

// const output = fizzBuzz('4');
// console.log(output);

// function fizzBuzz(input) {
//   if(typeof input !== 'number') {
//     return NaN;
//   };

//   if ((input % 3 === 0) && (input % 5 === 0)) {
//     return 'FizzBuzz';
//   };

//   if (input % 3 === 0) {
//     return 'Fizz';
//   };

//   if (input % 5 === 0) {
//     return 'Buzz';
//   };

//   return input;
// };

//*** EXERCISE 4 - DEMERIT POINTS ***

// Speed Limit = 70
// 5 -> 1 point
// Math.floor()
// greater than 12 points -> suspended

// checkSpeed(70);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed < speedLimit + kmPerPoint) {
//     console.log('Ok');
//     return;
//   };

//   const points = Math.floor((speed - speedLimit) / kmPerPoint);

//   if (points >= 12) {
//       console.log('License Suspended');
//     } else {
//       console.log('Points:', points);
//   };
// };

//*** EXERCISE 5 - EVEN AND ODD NUMBERS ***

// showNumbers(10);

// function showNumbers(limit) {
//   for(let i = 0; i <= limit; i++) {
//     if(i % 2 === 0) {
//       console.log('EVEN');
//     } else {
//       console.log('ODD');
//     };
//   };
// };

// function showNumbers(limit) {
//   for(let i = 0; i <= limit; i++) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   };
// };

//*** EXERCISE 6 - COUNT TRUTHY ***

// const isActive = true;
// const name = 'Steven'; // Truthy (true)
// const name = ''; // Falsy (false)
// Falsy:
// undefined; null; ''; 0; NaN;

// if(isActive) console.log('Hello');

// const array = [0, null, undefined, '', 2, 3];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;

//   for(let value of array) {
//     if(value) {
//       count++;
//     };
//   };
//   return count;
// };

//*** EXERCISE 7 - STRING PROPERTIES ***

// for(let key in movie) {
//   console.log(key, movie[key]);
// };

// const movie = {
//   title: 'King Kong',
//   releaseYear: 1947,
//   rating: 4.7,
//   director: 'Godzilla'
// };

// showProperties(movie);

// function showProperties(obj) {
//   for(let key in obj) {
//     if(typeof obj[key] === 'string') {
//       console.log((key + ':'), obj[key]);
//     };
//   };
// };

//*** EXERCISE 8 - SUM OF MULTIPLES OF 3 & 5 ***

// console.log(sum(10));
// // Multiples of 3: 3, 6, 9;
// // Multiples of 5: 5, 10;

// function sum(limit) {
//   let sum = 0;

//   for(let i = 0; i <= limit; i++) {
//     if(i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     };
//   };
//   return sum;
// };

//*** EXERCISE 9 - GRADE ***

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// const marks = [80, 80, 50];
// // Average = 70
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let sum = 0;

//   for(let mark of marks) {
//     sum += mark;
//   let average = sum / marks.length;

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// };

// Single Responsibility Principle Version

// const marks = [100, 100, 50];
// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// };

// function calculateAverage(array) {
//   let sum = 0;
//   for(let value of array) {
//     sum += value;
//   };
//   return sum / array.length;
// };

//*** EXERCISE 10 - STARS ***

// showStars(1);

// function showStars(rows) {
//   for (let row = 1; row <= rows; row++) {
//     let pattern = '';
//     for(let i = 0; i < row; i++) {
//       pattern += '*';
//     };
//     console.log(pattern);
//   };
// };

//*** EXERCISE 11 - PRIME NUMBERS ***

// PRIME (whose factors are only 1 and itself)

// showPrimes(20);

// function showPrimes(limit) {
//   for(let num = 2; num <= limit; num++) {
//     // 2 - current num (i)
//     let isPrime = true;

//     for(let factor = 2; factor < num; factor++) {
//       if(num % factor === 0) {
//         isPrime = false;
//         break;
//       };
//     };
//     if(isPrime) {
//       console.log(num)
//     };
//   };
// };

// Single Responsibility Principle Version

// showPrimes(20);

// function showPrimes(limit) {
//   for(let num = 2; num <= limit; num++) {
//     if(isPrime(num)) {
//       console.log(num);
//     };
//   };
// };

// function isPrime(num) {
//     for(let factor = 2; factor < num; factor++) {
//       if(num % factor === 0) {
//         return false;
//       };
//     };
//     return true;
// };

// *** OBJECTS ***

/*
// *** Object-oriented Programming (OOP) ***
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};

circle.draw(); // Draw method
*/

/*
// *** Factory Function ***

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
};

const circle1 = createCircle(1);
console.log(circle1);
circle1.draw();

const circle2 = createCircle(2);
console.log(circle2);
circle2.draw();

const myCircle = createCircle(1);

*/

// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour - Contructor Functions Use Pascal Notation

// *** Constructor Function ***
/*
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

const circle = new Circle(1);
*/

// *** Dynamic Nature of Objects ***
/*
const circle = {
    radius: 1
};

circle.color = 'yellow';
circle.draw = function() {};

delete circle.color;
delete circle.draw;

console.log(circle);
*/

// *** Value vs Reference Types ***

// Value (Primitive): Number, String, Bool, Symbol, undefined, null
// Primitives are copied by their value

// Reference: Object, Function, Array
// Objects are copied by their reference

/*
// Primitive
let x = 10;
let y = x;
x = 20;
// Reference
let x = { value: 10 };
let y = x;
x.value = 20;

// let number = 10;
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
};

increase(obj);
console.log(obj);
*/

// *** Enumerating Properties of an Object ***
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for(let key in circle) {
    console.log(key, circle[key]);
};

for(let key of Object.keys(circle)) {
    console.log(key);
};
for(let entry of Object.entries(circle)) {
    console.log(entry);
};

if('radius' in circle) console.log('yes');
*/

// *** Cloning an Object ***
/*
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
for(let key in circle) {
    another[key] = circle[key];
};
another['radius'] = circle['radius'];

const another = Object.assign({
    color: 'yellow'
}, circle);

const another = { ...circle };

another.draw();
console.log(another);
*/

// *** Math ***
/*
// Math.random()
function getRandomNum(min, max) {
    return Math.random() * max - min + min;
};
console.log(Math.floor(getRandomNum(1, 100)));
// Math.round()
let rndNum = Math.round(1.8);
console.log(rndNum);
// Math.max()
let maxNum = Math.max(1, 2, 3, 4, 5);
console.log(maxNum);
// Math.min()
let minNum = Math.min(1, 2, 3, 4, 5);
console.log(minNum);
*/

// *** String ***
/*
// String Primitive
const message = 'This is my first message';


// String Object
const another = new String('hi');
*/
/*
// *** Template Literals ***
const name = 'Fox';

const another = 
`Hi ${name},

Thank You for joining my mailing list.

Regards,
Steven`;
*/

// *** Date ***
/*
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2022, 4, 11, 9);

now.getFullYear();
now.setFullYear(2021);
now.toDateString();
now.toTimeString();
now.toISOString();
*/

// *** EXERCISE 1: ADDRESS OBJECT
// Create address Object with: street, city, zipCode
// Create function called showAddress(address)
/*
const address = {
    street: 'Bay City Bend',
    city: 'Austin',
    zipCode: '78725'
};

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    };
};
showAddress(address);
*/

// *** EXERCISE 2: FACTORY AND CONSTRUCTOR FUNCTIONS
/*
// Factory
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
};
const myAddress = createAddress('Bay City', 'Austin', '78725');
console.log(myAddress);

// Constructor
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};
const oldAddress = new Address('Mentone Drive', 'Round Rock', '78741');
console.log(oldAddress);
*/

// *** EXERCISE 3: OBJECT EQUALITY
/*
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const address1 = new Address('Mentone Drive', 'Round Rock', '78741');
const address2 = new Address('Mentone Drive', 'Round Rock', '78741');
const address3 = address1;

// === to see if objects have same reference (all properties are equal return true)
function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
};
console.log(areEqual(address1, address2));

// referencing same object
function areSame(address1, address2) {
    return address1 === address2;
};
console.log(areSame(address1, address2));
console.log(areSame(address1, address3));
*/

// *** EXERCISE 4: BLOG POST OBJECT
/*
// Create object with: title, body, author, views, comments (author, body), isLive (true/false)

const blogPost = {
    title: 'a',
    body: 'b',
    author: 'c',
    views: 1,
    comments: [
        { author: 'z',body: 'y' },
        { author: 't',body: 'v' },
    ],
    isLive: true
};
console.log(blogPost);
*/

// *** EXERCISE 5: CONSTRUCTOR FUNCTIONS
/*
function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};

const post = new Post('a', 'b', 'c');
console.log(post);
*/

// *** EXERCISE 6: PRICE RANGE OBJECT
/*
// Inexpensive($), Moderate($$), Pricey($$$)
// Create array of objects, each object is price range object with own properties

let priceRanges = [
    { label: '$', toolTip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', toolTip: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', toolTip: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
];

let restaurants = [
    { averagePerPerson: 5}
];
*/

// *** ARRAYS ***

/*
const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');

console.log(numbers);
*/
/*
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
*/
/*
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

const course = courses.find(course => course.name === 'a');
console.log(course);

const courseIndex = courses.findIndex(function(course) {
    return course.name === 'a';
}); 
console.log(courseIndex);
*/
/*
// *** Removing Elements ***
const numbers = [1, 2, 3, 4];

// End
// const last = numbers.pop();
// console.log(last);

// Beginning
// const first = numbers.shift();
// console.log(first);

// Middle
// numbers.splice(2, 2);
// console.log(numbers);
*/
/*
// *** Emptying an Array ***
// Solution 1 ***
// numbers = [];

// Solution 2 ***
// numbers.length = 0;
*/
/*
// *** Combining and Slicing Arrays ***
const first = [1, 2, 3];
const second = [4, 5, 6];
const object = [{ id: 1 }];

object[0].id = 10;
console.log(object);

// Combine
const combined = first.concat(second);

// Slice
const slice = combined.slice();

console.log(combined);
console.log(slice);
*/
/*
// *** Spread Operator ***
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

const copy = [...combined];
console.log(copy);
*/
/*
// *** Iterating an Array ***
const numbers = [1, 2, 3];

for(let number of numbers) {
    console.log(number);
};

numbers.forEach(function(number) {
    console.log(number);
});
numbers.forEach((number, index) => console.log(number, index));
*/
/*
// *** Joining Arrays ***
const numbers = [1, 2, 3];
const joined = numbers.join(',');

console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');

console.log(parts);

const combined = parts.join('-');

console.log(combined);
*/
/*
// *** Sorting Arrays ***
// const numbers = [2, 3, 1];
// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];
courses.sort(function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(courses);
*/
/*
// *** Testing Elements of an Array ***
const numbers = [1, -1, 2, 3];

// every() = All elements match given criteria
const allPositive = numbers.every(function(value) {
    return value >= 0;
});

console.log(allPositive);
// some() = Some elements match given criteria
const atLeastOnePositive = numbers.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);
*/
/*
// *** Filtering an Array ***
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);
*/

// *** Mapping an Array ***
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n <= 0);

console.log(filtered);