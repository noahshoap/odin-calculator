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

    switch (operator) {
        case `+`:
            result = add(x, y);
            break;
        case `-`:
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case `/`:
            result = divide(x,y);
            break;
        default:
            console.log(`invalid operator`);
            break;
    }

    return result;
}