// Create a command-line node application that takes in parameters like this:

// * `node calculator.js subtract 5 2` ... and outputs 3
// * `node calculator.js multiply 3 2` ... and outputs 6
// * `node calculator.js divide 8 2` ... and outputs 4
// * `node calculator.js remainder 7 2`... and outputs 1



var process01 = process.argv;

// Looks at 2nd index which is subtract, multiply, divide, or remainder //
var calc = process01[2];

// Stores values entered into variables //
number1 = process01[3];
number2 = process01[4];

var output;

if (calc == "add") {
    output = parseFloat(number1) + parseFloat(number2);
    console.log(output);
}

// Subtract //
// If 2nd index = "Subtract", subtract 3rd and 4th index numbers //
else if (calc == "subtract") {
    output = number1 - number2;
    console.log(output);
}
// Multiply //
else if (calc == "multiply") {
    output = number1 * number2;
    console.log(output);
}
// Divide //
else if (calc == "divide") {
    output = number1 / number2;
    console.log(output);
}
// Remainder //
else if (calc == "remainder") {
    output = number1 % number2;
    console.log(output);
}



