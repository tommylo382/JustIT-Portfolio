const prompt = require("prompt-sync")({sigint: true});

let mode = ";"
let func = "";
let num1 = 0;
let num2 = 0;
let loop = true;
let balance = 1000;
let money = 0;

console.log("Calculator and Cash Machinetype\n1: Calculator\n2: Cash Machine");
mode = prompt();

switch(mode) {
    case "1":
        cal();
        break;
    case "2":
        cash();
        break;
    default:
        console.log("Please enter 1 or 2");
}

// calculator
function cal() {
    console.log("Calculator");

    while (true) {
        console.log("1: Addition\n2: Subtraction\n3: Multiplication\n4: Division");
        func = prompt();

        switch(func) {
            case "1":
                add();
                break;
            case "2":
                sub();
                break;
            case "3":
                mul();
                break;
            case "4":
                div();
                break;
            default:
                console.log("Please enter 1 to 4");
        }

        loop = prompt("Do another calculation? (y/n): ");

        if(loop == "n") {
            break;
        }
    }
}

// addition
function add() {
    console.log("Addition");
    num1 = parseInt(prompt("1st number: "));
    num2 = parseInt(prompt("2nd number: "));
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

// subtraction
function sub() {
    console.log("Subtraction");
    num1 = parseInt(prompt("1st number: "));
    num2 = parseInt(prompt("2nd number: "));
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
}

// multiplication
function mul() {
    console.log("Multiplication");
    num1 = parseInt(prompt("1st number: "));
    num2 = parseInt(prompt("2nd number: "));
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
}

// division
function div() {
    console.log("Division");
    num1 = parseInt(prompt("1st number: "));
    num2 = parseInt(prompt("2nd number: "));
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
}

// cash machine
function cash() {
    console.log("Cash Machine");

    while (true) {
        console.log("1: Check Account Balance\n2: Deposit Money\n3: Withdraw Money");
        func = prompt();

        switch(func) {
            case "1":
                bal();
                break;
            case "2":
                dep();
                break;
            case "3":
                wit();
                break;
            default:
                console.log("Please enter 1 to 3");
        }

        loop = prompt("Do another transaction? (y/n): ");

        if(loop == "n") {
            break;
        }
    }
}

// check account balance
function bal() {
    console.log(`Account Balance: $${balance}`);
}

// deposit money
function dep() {
    console.log("Deposit Money");
    money = parseInt(prompt("How much do you want to deposit ($): "));
    console.log(`Account Balance: $${balance += money}`);
}

// withdraw money
function wit() {
    console.log("Withdraw Money");
    money = parseInt(prompt("How much do you want to Withdraw ($): "));
    if(money > balance) {
        console.log("Not enought balance");
    } else {
        console.log(`Account Balance: $${balance -= money}`);
    }
}