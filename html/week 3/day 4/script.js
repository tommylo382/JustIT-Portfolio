const prompt = require("prompt-sync")({sigint: true});

function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Tommy");

// for(let i = 0; i < 5; i++) {
//     greet();
// }

function addNumbers(num1, num2) {
    return (num1 + num2);
}

console.log(addNumbers(1, 2));

function multiplyNumbers(num1, num2) {
    return (num1 * num2);
}

console.log(multiplyNumbers(1, 2));

function concatStrings(str1, str2) {
    return (str1.concat(str2));
}

console.log(concatStrings("str1", "str2"));

function maxNumber() {
    let num1 = prompt("What is your first number?");
    let num2 = prompt("What is your second number?");

    if(num1 > num2) {
        return (num1);
    } else {
        return (num2);
    }
}

console.log(maxNumber());

const sayHello = function () {
    console.log("Hello");
}

sayHello();

global = "global";

function callGlobal() {
    console.log(`This is a global variable: ${global}`);
}

callGlobal();

function callLocal() {
    let local = "local";

    console.log(`This is a local variable: ${local}`);
}

callLocal();

function calArea(h, w) {
    return (h * w);
}

console.log(`The area is ${calArea(10, 5)}`);

// // Functions-Answers.debug
// // Activity 1: Word Blender
// function combineWords(word1, word2) {
//     return word1 + " " + word2; 
// }
// console.log(combineWords("Hello", "Sweetie"))

// // Activity 2: Basic Calculator
// function add(a, b) {
//   return a + b
// }

// console.log(add(2,5));

// function subtract(a, b) {
//   return a - b;
// }

// console.log(subtract(2,5));

// function multiply(a, b) { 
//   return a * b;
// }

// console.log(multiply(2,5));

// function divide(a, b) {
//   return a / b; 
// }

// console.log(divide(2,5));

// // Activity 3: Weather Forecaster
// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(10));

// // Activity 4: Blast Off!
// function startCountdown(number) {
//   for (let i = number; i >= 0; i--) { 
//     console.log(i);
//   }
//   console.log("Blast off!");
// }

// startCountdown(10);

// // Activity 5: Age Teller
// function calculateAge(birthYear) {
//   const currentYear = new Date().getFullYear(); 
//   return currentYear - birthYear;
// }

// console.log(calculateAge(1999));

// // Activity 6: The Extremes
// function findMin(numbers) {
//   return Math.min(...numbers);
// }

// console.log(findMin([1, 2, 3]));

// function findMax(numbers) {
//   return Math.max(...numbers);
// }

// console.log(findMax([1, 2, 3]));

// // Activity 7: Length Matters
// function isLongerThan(string, length) {
//   return string.length > length; 
// }

// console.log(isLongerThan("String", 5));

// // Activity 8: Vowel Counter
// function countVowels(string) {
//   const vowels = string.match(/[aeiou]/gi);
//   return vowels ? vowels.length : 0; 
// }

// console.log(countVowels("String", 5));

// // Activity 9: Banker's Formula
// function calculateInterest(principal, rate, time) {
//   return (principal * rate * time) / 100; 
// }

// console.log(calculateInterest(1000, 0.05, 1));

// // Activity 10: Guess the Number
// function guessNum(userGuess) {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   if (userGuess == randomNumber) { 
//     console.log("You guessed correctly!");
//   } else if (userGuess < randomNumber) {
//     console.log("Too low!");
//   } else {
//     console.log("Too high!");
//   }
//   return `The random number is ${randomNumber}`;
// }

// console.log(guessNum(5));

// Team-Functions-Activities
// Q1
function combineWords(str1, str2) {
    return str1 + " " + str2; 
}

console.log(combineWords("str1", "str2"))

// Q2
let nums = [1, 2];

function add(num1, num2) {
  return num1 + num2
}

console.log(add(...nums));

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(...nums));

function multiply(num1, num2) { 
  return num1 * num2;
}

console.log(multiply(...nums));

function divide(num1, num2) {
  return num1 / num2; 
}

console.log(divide(...nums));

// Q3
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

console.log(celsiusToFahrenheit(10));

// Q4
function startCountdown(num) {
  for (let i = num; i >= 0; i--) { 
    console.log(i);
  }
  console.log("Blast off!");
}

startCountdown(10);

// Q5
function calculateAge(birthYear) {
  const currYear = new Date().getFullYear(); 
  return currYear - birthYear;
}

console.log(calculateAge(1999));

// Q6
nums = [1, 2, 3];

function findMin(nums) {
  return Math.min(...nums);
}

console.log(findMin(nums));

function findMax(nums) {
  return Math.max(...nums);
}

console.log(findMax(nums));

// Q7
function isLongerThan(str, length) {
  return str.length > length; 
}

console.log(isLongerThan("String", 5));

// Q8
function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0; 
}

console.log(countVowels("String", 5));

// Q9
function calculateInterest(p, r, t) {
  return (p * r * t) / 100; 
}

console.log(calculateInterest(1000, 0.05, 1));

// Q10
function guessNum(guess) {
  const random = Math.floor(Math.random() * 10) + 1;
  if (guess == random) { 
    console.log("You guessed correctly!");
  } else if (guess < random) {
    console.log("Too low!");
  } else {
    console.log("Too high!");
  }
  return `The random number is ${random}`;
}

console.log(guessNum(5));

// Advanced-Functions-Practice
// Q1
function sumArray(arr) {
    let sum = 0;

    arr.forEach((v) => {
        sum += v;
    });

    return sum; 
}

console.log(sumArray([1, 2, 3, 4, 5]))

// Q2
function reverseString(str) {
    let reverse = "";

    for(let i = 0; i < str.length; i++) {
        reverse += str[str.length - i - 1];
    }

    return reverse; 
}

console.log(reverseString("String"))

// Q3
function findMax(nums) {
    let max = 0;

    nums.forEach((v) => {
        if(v > max) {
            max = v;
        }
    });

    return max; 
}

console.log(findMax([1, 2, 3, 4, 5]))

// Q4
function isPrime(num) {
    if(num <= 1) {
        return false;
    } else {
        for(let i = 2; i < num; i++) {
            if((num % i) == 0) {
                return false;
            }
        }

        return true;
    }
}

console.log(isPrime(7))

// Q5
function fibonacci(n) {
    let fib = [];

    for(let i = 0; i < n; i++) {
        if(i <= 1) {
            fib[i] = i;
        } else {
            fib[i] = fib[i - 2] + fib[i - 1];
        }
    }

    return fib;
}

console.log(fibonacci(10))

// Q6
function countCharacter(str, c) {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] == c) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("Apple", "p"))

// Q7
function filterEvens(nums) {
    for(let i = 0; i < nums.length; i++) {
        if((nums[i] % 2) == 1) {
            nums.splice(i, 1);
        }
    }
    return nums;
}

console.log(filterEvens([1, 2, 3, 4, 5]))

// Q8
function capitalizeWords(str) {
    let strs = str.split(" ");

    strs.forEach((v, i) => {
        strs[i] = v.charAt(0).toUpperCase() + v.slice(1);
    });

    return strs.join(" ");
}

console.log(capitalizeWords("sample string"));

// Q9
function findLongestWord(str) {
    let strs = str.split(" ");
    let longest = "";

    strs.forEach((v) => {
        if(v.length > longest.length) {
            longest = v;
        }
    });

    return longest;
}

console.log(findLongestWord("Longest String"));

// Q10
function sortNumbers(nums) {
    return nums.toSorted();
}

console.log(sortNumbers(test));