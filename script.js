function printEvenNumbers(startingValue, limit, numberDivisibleBy) {
    for (let i = startingValue; i <= limit; i++) {
        if (i % numberDivisibleBy == 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(70, 100, 15);

let num = 6;

// function of countdown
function countdown(start) {
    let count = start;

    while (count > 0) {
        console.log(count);
        count--;
    }
}
countdown(num);

// function of countdown with delay
function startCountDown(start, delay) {
    function countDown() {
        console.log("Start countdown function", start);
        if (start > 1) {
            start--;
            setTimeout(countDown, delay)
        }
    }

    // start the countdown
    setTimeout(countDown, delay);
}

startCountDown(100, 250);

