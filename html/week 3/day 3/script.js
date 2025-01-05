for(let i = 1; i < 6; i++) {
    console.log(`Hello JavaScript: ${i}`);
}

const users = [
    {name: "name1", email: "email1@example.com", subscriptionExpiry: "1-12-2024"},
    {name: "name2", email: "email2@example.com", subscriptionExpiry: "2-12-2024"},
    {name: "name3", email: "email3@example.com", subscriptionExpiry: "3-12-2024"}
]

for(let i = 0; i < (users.length); i++) {
    console.log(users[i]);
}

for(let i = 0; i < 11; i += 2) {
    console.log(i);
}

let num = 0;

while(num < 5) {
    console.log(`Loop iterations: ${num++}`);
}

let smile = ":)";
num = 0;

while(num < 10) {
    console.log(smile);
    num++;
}

let count = 0;

while(true) {
    console.log(`This is log number: ${count}`);

    if(count >= 20) {
        console.log("Error");
        break;
    } else {
        count++;
    }
}

let words = ["apple", "banana", "cherry", "apricot", "date"]

for (let i =0; i < words.length; i++) {
    if(words[i].startsWith("a")) {
        continue;
    } else {
        console.log(words[i]);
    }
}

for (let i =10; i > 0; i--) {
    console.log(i);
}

num = 10;

while(num > 0) {
    console.log(num--);
}

num = 0;

do {
    console.log(`Loop iterations: ${num++}`);
} while(num < 0);

// 1. Counting 1 to 5:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. Printing "Hello" 3 Times :
for (let i = 0; i < 3; i++) {
    console.log("Hello");
}

// 3. Printing Even Numbers 2 to 6 :
for (let i = 2; i <= 6; i += 2) {
    console.log(i);
}

// 4. Counting Down from 3 to 1 :
for (let i = 3; i >= 1; i--) {
    console.log(i);
}

// 5. Printing a Simple Pattern:
for (let i = 0; i < 3; i++) {
    console.log("*");
}

// 6. Printing Letters of a Word "JS" :
const word = "JS";

for (let i = 0; i < word.length; i++) {
    console.log(word[i])
}

// 7. Printing Colors: Red, Green, Blue:
const colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}

// 8. Printing Properties of an Object:
const person = {
    name: "John",
    age: 25,
    gender: "Male"
}

for (let key in person) {
    console.log(person[key]);
}

// 9. Printing Numbers in a Simple Sequence :
num = 1

while (num <= 5) {
    console.log(num);
    num++;
}

// 10. Counting from 1 to 5 with a While Loop :
count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// For Loop
// Q1
let nums1 = [1, 2, 3], nums2 = [4, 5, 6]
let nums = nums1.concat(nums2);
let sum = 0;

for(let num of nums) {
    sum += num;
}

console.log(sum);

// Q2
let n = 10;

for(let i = 1; i <= n; i++) {
    if((i % 2) == 0) {
        console.log(i);
    } else {
        continue;
    }
}

// Q3
for(let i = nums.length; i > 0; i--) {
    console.log(nums[i - 1]);
}

// Q4
for(let i = 0; i < nums1.length; i++) {
    console.log(nums1[i] + nums2[i]);
}

// Q5
let str = "String";

for(let i = 0; i < str.length; i++) {
    if((i % 2) == 1) {
        str = str.replace(str[i], "Z");
    } else {
        continue;
    }
}

console.log(str);

// Q6
if(str.includes("y")) {
    console.log("Yes");
} else  {
    console.log("No");
}

// Q7
n = 1;

for(let i = 0; i < nums.length; i++) {
    n *= nums[i];
}

console.log(n);

// Q8
let guess = ["5234", "1534", "1254", "1235"];
let pin = "1234";
let hint = "****"
let tries = 1;

for(let i = 0; i < 4; i++) {
    if(tries > 4) {
        console.log("You can only try 4 times");
        break;
    } else {
        hint = "****"

        console.log(`Attempts ${i + 1}`);

        for(let j = 0; j < pin.length; j++) {
            if(guess[i][j] == pin[j]) {
                hint = hint.split("");
                hint[j] = guess[i][j];
                hint = hint.join("");
            }
        }

        if(pin == hint) {
            console.log("Correct");
            break;
        } else {
            console.log(`Hint: ${hint}`);
        }

        tries++;
    }
}

// Q9
let palindrome = "abcba";
let ans = "Yes";

for(let i = 0; i < (palindrome.length / 2); i ++) {
    if(palindrome[i] != palindrome[palindrome.length - i - 1]) {
        ans = "No";
        break;
    } else {
        continue;
    }
}

console.log(ans);

// Q10
num = 10;
sum = 0;

for(let i = 0; i <= num; i++) {
    sum += i;
}

console.log(sum);

// While Loop
// Q1
let i = 0;

while (i < 5) {
    console.log("Hello, World!");
    i++;
}

// Q2
i = 1;

while (i <= 5) {
    console.log(i++);
}

// Q3
i = 0;

while (i < 10) {
    console.log("A");
    i++;
}

// Q4
i = 0;
str = "";

while (i < 5) {
    str += "X";
    i++;
}
console.log(str);

// Q5
i = 1;

while (i <= 3) {
    console.log(i++);
}

// Q6
i = 3;

while (i > 0) {
    console.log(i);
    i--;
}

// Q7
i = 0;
let color = ["Red", "Green", "Blue"];

while (i < 3) {
    console.log(color[i]);
    i++;
}

// Q8
i = 5;

while (i > 0) {
    console.log(i);
    i--;
}

// Q9
i = 0;

while (true) {
    if(i > 10) {
        break;
    }

    console.log("Looping!");
    i++;
}

// Q10
i = 0;
let bool = true;

while (bool) {
    console.log(bool);
    i++;

    if(i > 10) {
        bool = false;
    }
}

// Iterating-Activity
let book = {
    title: "",
    author: "",
    publisher: ""
}
let value = ["Book Title", "Book Author", "Book Publisher"]
i = 0;

for(let key in book) {
    Object.defineProperty(book, key, {value: value[i++]});
    console.log(`${key}: ${book[key]}`)
}