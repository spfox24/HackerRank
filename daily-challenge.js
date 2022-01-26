/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/

const parameterVariable = 'Welcome to 10 Days of JavaScript!'

function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    // Write a line of code that prints parameterVariable to stdout using console.log:
    console.log(parameterVariable);
};

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/

const secondInteger = parseInt(12);
const secondDecimal = parseFloat(4.32);
const secondString = 'is the best place to learn and practice coding!';

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    console.log(firstInteger + parseInt(secondInteger));
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    console.log(firstDecimal + parseFloat(secondDecimal));
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    console.log(firstString + secondString);
}

/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/

const length = 3;
const width = 4.5;

function getArea(length, width) {
    let area;
    // Write your code here
    area = (length*width);
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = (length+width)*2;
    return perimeter;
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

const s = 'javascriptloops';

function vowelsAndConsonants(s) {
    const vowels = 'aeiou';
    let consonants = '';

    for(let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } else {
            consonants += s[i] + '\n';
        }
    }
    console.log(consonants.trim());
}

const n = 4;

function factorial(n) {
    if(n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = 2.6;

    const PI = Math.PI;
    const area = (PI * Math.pow(r, 2));
    const perimeter = (2 * PI * r);

    // Print the area of the circle:
    console.log(area);
    // Print the perimeter of the circle:
    console.log(perimeter);
};

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = 'A';
    } else if (score > 20 && score <= 25) {
        grade = 'B';
    } else if (score > 15 && score <= 20) {
        grade = 'C';
    } else if (score > 10 && score <= 5) {
        grade = 'D';
    } else if (score > 5 && score <= 10) {
        grade = 'E';
    } else {
        grade = 'F';
    }

    return grade;
}

function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
            break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
            break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
            break;
        default:
            letter = 'D';
    }
    return letter;
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/

function getSecondLargest(nums) {
    // Complete the function
    let largest = nums[0];
    let secondLargest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
        }
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    return secondLargest;
}

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch(error) {
        console.log(error.message);
    } finally {
        console.log(s);
    };
};

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

function isPositive(a) {
    if (a > 0) {
        return 'YES';
    } else {
        throw(a === 0 ? new Error('Zero Error') : new Error('Negative Error'));
    };
};

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    this.length = a;
    this.width = b;
    this.perimeter = 2 * (a + b);
    this.area = a * b;
}





/* CODE WITH MOSH */

/*
  If/else
*/

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
