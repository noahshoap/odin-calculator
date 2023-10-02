const display = document.querySelector(".text");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const evaluate = document.querySelector("#equal");

let leftNumber = null;
let rightNumber = null;
let operator = null;

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(x, y, operator) {
    let result = 0;

    x = Number(x);
    y = Number(y);


    switch (operator) {
        case `add`:
            result = add(x, y);
            break;
        case `subtract`:
            result = subtract(x, y);
            break;
        case 'multiply':
            result = multiply(x, y);
            break;
        case `divide`:
            result = divide(x,y);
            break;
        default:
            console.log(`invalid operator`);
            break;
    }

    return result;
}

function updateDisplay() {
    // for now, just replace display number with recent number
    if (operator === null) {
        display.textContent = `${leftNumber}`;
    } else {
        if (rightNumber === null) {
            display.textContent = `0`;
        } else {
            display.textContent = `${rightNumber}`;
        }
    }
}

function numberFromId(id) {
    switch (id) {
        case 'nine':
            return 9;
        case 'eight':
            return 8;
        case 'seven':
            return 7;
        case 'six':
            return 6;
        case 'five':
            return 5;
        case 'four':
            return 4;
        case 'three':
            return 3;
        case 'two':
            return 2;
        case 'one':
            return 1;
        case 'zero':
            return 0;
        default:
            alert("bad number");
    }
}

numbers.forEach( (numberButton) => {
    numberButton.addEventListener('click', () => {
        if (leftNumber === null) {
            leftNumber = numberFromId(numberButton.id);
            console.log(typeof(leftNumber));
        } else if (operator === null) {
            console.log('number adding to left');
            leftNumber = `${leftNumber}${numberFromId(numberButton.id)}`;
        } else {
            if (rightNumber === null) {
                rightNumber = numberFromId(numberButton.id);
            } else {
                rightNumber = `${rightNumber}${numberFromId(numberButton.id)}`;
            }
        }

        updateDisplay();
    });
});

operators.forEach( (operatorButton) => {
    if (operatorButton.id === 'equal') return;

    operatorButton.addEventListener('click', () => {
        operator = operatorButton.id;
    });
});

evaluate.addEventListener('click', () => {
    console.log(`Left: ${leftNumber}`);
    console.log(`Operator: ${operator}`);
    console.log(`Right: ${rightNumber}`);

    leftNumber = operate(leftNumber, rightNumber, operator);

    console.log(`Result: ${leftNumber}`);
    rightNumber = null;
    operator = null;

    updateDisplay();
});