
console.log("This is my first program")
console.log('Hello John, your monthly salary is 5000')

const prompt = require('prompt-sync')();
console.log('starting')
const name = prompt('Enter your name: ');
console.log("Hello,${name}");
const number = parseInt(prompt("Enter a number:"));

if(number>0) {
    console.log("The number is positive");
}
else if(number == 0) {
    console.log("The number is zero");

}
else{
    console.log("The number is negative");
}



