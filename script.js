
function printEvenNumbers(startingValue, limit, numberDivisibleBy) {
    for (let i = startingValue; i <= limit; i++) {
        if (i % numberDivisibleBy == 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(70, 100, 15);


// function of countdown
let num = 6;

function countdown(start) {
    let count = start;

    while (count > 0) {
        console.log(count);
        count--;
    }

    return count;
}
countdown(num);

let myValue = countdown(num);
console.log("myValue", myValue);

// function of countdown with delay
function startCountDown(start, delay) {
    function countDown() {
        console.log("Start countdown function", start);
        if (start > 0) {
            start--;
            setTimeout(countDown, delay);
        }
    }

    setTimeout(countDown, delay);
}

// startCountDown(10, 1000);

// draw a pyramid with a function
function drawPyramid(rows = 10, character = '*', delay = 1000) {
    for (let i = 1; i <= rows; i++) {
        setTimeout(() => {
            let output = '';
            for (let j = 1; j <= rows - i; j++) {
                output += " ";
            }
            for (let k = 1; k < (2 * i - 1); k++) {
                output += character;
            }
            console.log(output);
        }, i * delay)
    }
}

drawPyramid(15, "#", 1000);

function someName(parameters) {
    // we do some work
    console.log(parameters);
}

someName("Hello");

const someFunction = (parameters) => {
    // we do some work
    console.log(parameters);
}

someFunction("Hello");

let thisFunction = () => {
    console.log("Hello");
}

thisFunction();

function someMessage(string = "Hello as a default string") {
    console.log(string);
}

someMessage();

function returnAllSums(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
}

console.log(returnAllSums(1, 2, 10, 100, 1000));

const nicksFunction = (name) => {
    console.log("Hey " + name + " from Nick! part 1");
    return ("Hey " + name + " from Nick! part 2");
}

const bigGreeting = nicksFunction("chris");

function multiply(a, b) {
    return a * b;
}

let numberOfFiends = multiply(5, 10);
console.log("number of friends", numberOfFiends);

console.log("Chris has " + multiply(5, 10) + " friends.");

console.log(bigGreeting);