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