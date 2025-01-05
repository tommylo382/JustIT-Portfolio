let array = [1, "hello", true];

console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

let movies = ["movie1", "movie2", "movie3", "movie1"]

movies.push("movie4");

console.log(movies[1]);
console.log(movies);

movies.pop();

console.log(movies);

movies.push("movie5");
movies.push("movie6");

console.log(movies);

movies.pop();

console.log(movies);
console.log(movies.indexOf("movie1"));
console.log(movies.length);

movies.unshift("movie7", "movie8", "movie9");
movies.shift();

let lengths = [];

movies.forEach((v, i) => lengths[i] = v.length);

console.log(movies);
console.log(lengths);

let newMovies = movies.slice(1, 5);

console.log(newMovies);

newMovies.splice(2, 1, "movie10", "movie11");

console.log(newMovies);

let concat = movies.concat(newMovies);

console.log(concat);

let join = concat.join(", ");

console.log(join);

let temperature = 40;

if(temperature >= 30) {
    console.log("It is 30 degrees or more");
}

let customerAge = "21";
let legalAge = 18;
let country = "uk"

if(customerAge >= 21) {
    console.log("You are old enough to drink!");
} else if(customerAge >= legalAge && country == "uk") {
    console.log("You are old enough to drink!");
} else if(customerAge >= legalAge && country == "usa") {
    console.log("You are not quite old enough to drink in USA");
}  else if(customerAge < legalAge) {
    console.log("You are not quite old enough");
} else {
    console.log("Error: Try entering a number");
}

let weather = "sunny";
let place = "mountains";

if(weather == "sunny" && place == "mountains") {
    console.log("Perfect day for a hike");
} else {
    console.log("Try something else a bit safer today");
}

let weather2 = "rainy";
let place2 = "beach";

if(weather2 == "sunny" || place2 == "beach") {
    console.log("Lets go to the beach-each");
} else {
    console.log("Museum anyone?");
}

let clothing = "short"

if(temperature >= 30) {
    console.log("Better not go outside");
} else if(temperature >= 20 && clothing == "long") {
    console.log("Better wear less");
} else if(temperature >= 10 && clothing == "short") {
    console.log("Better wear more");
} else {
    console.log("Better not go outside");
}

// // Snippet 1
// let age = 20;

// if (age > 18) {
//     console.log("You are an adult.");
// }
// else {
//     console.log("You are a minor.");
// }

// // Snippet 2
// let score = 85;

// if (score >= 60) {
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

// // Snippet 3
// let temperature = 25;

// if (temperature > 30) {
//     console.log("It's hot outside");
// } else {
//     console.log("It's cool outside");
// }

// // Snippet 4
// let username = 'admin';

// if (username == 'admin') {
//     console.log("Access granted");
// } else {
//     console.log("Access denied");
// }

// // Snippet 5
// let light = 'green';

// if (light == "green") {
//     console.log("Go");
// } else if (light == "red") {
//     console.log("Stop");
// } else if (light == "yellow") {
//     console.log("Slow down");
// }

// // Snippet 6
// let waterTemperature = 80;

// if (waterTemperature < 0) {
//     console.log("Solid");
// } else if (waterTemperature > 100) {
//     console.log("Gas");
// } else {
//     console.log("Liquid");
// }

// // Snippet 7
// let ageForDriving = 20;

// if (ageForDriving >= 16) {
//     console.log("Can drive");
// } else {
//     console.log("Cannot drive");
// }

// // Snippet 8
// let operation = 'add';
// let number1 = 5, number2 = 7;

// if (operation == "add") {
//     console.log(number1 + number2);
// } else if (operation == "subtract") {
//     console.log(number1 - number2);
// } else {
//     console.log("Operation not recognized");
// }

// // Snippet 9
// let customerAge = 65;

// if (customerAge > 60) {
//     console.log("Eligible for discount");
// } else {
//     console.log("Not eligible for discount");
// }

// // Snippet 10
// let day = "Monday";

// if (day == "Saturday" || day == "Sunday") {
//     console.log("It's weekend!");
// } else {
//     console.log("It's a weekday.");
// }

// // Snippet 11
// let mood = "happy";

// if (mood == "happy") {
//     console.log("It's a great day!");
// } else {
//     console.log("Hope things get better!");
// }

// // Snippet 12
// let weather = "sunny";

// if (weather == "rainy") {
//     console.log("Don't forget an umbrella.");
// } else {
//     console.log("Wear sunglasses.");
// }

// // Snippet 13
// let number = 10;

// if (number % 2 == 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

// // Snippet 14
// let loggedIn = true;

// if (loggedIn == true) {
//     console.log("Welcome back!");
// } else {
//     console.log("Please log in.");
// }

// // Snippet 15
// let grade = 87;

// if (grade >= 90) {
//     console.log("A");
// } else if (grade >= 80) {
//     console.log("B");
// } else if (grade >= 70) {
//     console.log("C");
// } else if (grade >= 60) {
//     console.log("D");
// } else {
//     console.log("F");
// }

// // Snippet 16
// let speed = 55;

// if (speed > 60) {
//     console.log("Too fast");
// } else if (speed < 40) {
//     console.log("Too slow");
// } else {
//     console.log("Good speed");
// }

// // Snippet 17
// let meal = "lunch";

// if (meal == "breakfast") {
//     console.log("Good morning!");
// } else if (meal == "lunch") {
//     console.log("Good afternoon!");
// } else if (meal == "dinner") {
//     console.log("Good evening!");
// } else {
//     console.log("Hello!");
// }

// // Snippet 18
// let pets = 2;

// if (pets > 3) {
//     console.log("You have many pets");
// } else {
//     console.log("Not too many pets");
// }

// // Snippet 19
// let hoursSlept = 8;

// if (hoursSlept < 7) {
//     console.log("You might be tired today.");
// } else if (hoursSlept > 9) {
//     console.log("You got plenty of sleep!");
// } else {
//     console.log("That's a healthy amount of sleep.");
// }

// // Snippet 20
// let ageCheck = 21;

// if (ageCheck < 18) {
//     console.log("You're a minor.");
// } else if (ageCheck > 18) {
//     console.log("You're an adult.");
// } else {
//     console.log("Happy 18th birthday!");
// }