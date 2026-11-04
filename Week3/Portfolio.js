const prompt = require('prompt-sync')();

const SName = prompt("Enter your Full Name: ");
const SId = prompt("Enter your Student ID: ");
const SLnum = prompt("Enter your Lab Group Number: ");

function StudentInfo(name, id, lnum) {
    console.log("Your Name is: " + name +
        " Your Student Id is: " + id +
        " Your Lab Group Number is: " + lnum);
}

// Display current date and time
const currentDateTime = new Date();

console.log("This is my portfolio task");
console.log("Program run on: " + currentDateTime.toLocaleString());


StudentInfo(SName, SId, SLnum);

// Second Exercise
const StudSkills = (skills) => {
    console.log("Favourite Programming Language: " + skills);
};

StudSkills("java, python, C++");


const lastFourDigits = String(SId).slice(-4);

let UniqueValue = 0;
for (const digit of lastFourDigits) {
    UniqueValue += Number(digit);
}

console.log("Last four digits: " + lastFourDigits);
console.log("Unique Value: " + UniqueValue);

console.log("Program ended");