function addition(num1, num2){
    return num1 + num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function substraction(num1, num2) {
    return num1 - num2;
}


function calculate(num1, num2, op) {
    console.log("res is: " + (op(num1, num2)));
}
//run in chrome developer javascript console
