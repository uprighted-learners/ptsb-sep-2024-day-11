
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

startCountDown(10, 1000);

