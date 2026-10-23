const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0){
        return "cannot divide by zero";
    }
    return a/ b;
}

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+": return add(num1, num2);
        case "-": return subtract(num1, num2);
        case "*": return multiply(num1, num2);
        case "/": return divide(num1, num2);
        case "%": return num1 % num2;
        case "**": return num1 ** num2;
        default: return "Invalid operator";
    }
}

function check(testName, actual, expected) {
    if (actual === expected) {
        console.log(`✅ passed: ${testName} (Got ${actual})`);
    } else {
        console.log(`❌ Failed: ${testName} (Expected ${expected}, Got ${actual})`);
    }
}

check("10 + 5", calculate(10, "+", 5), 15);
check("10 - 5", calculate(10, "-", 5), 5);
check("10 * 5", calculate(10, "*", 5), 50);
check("10 / 5", calculate(10, "/", 5), 2);
check("10 / 0", calculate(10, "/", 0), "cannot divide by zero");
check("10 % 3", calculate(10, "%", 3), 1);
check("2 ** 3", calculate(2, "**", 3), 8);
check("10 ^ 5", calculate(10, "^", 5), "Invalid operator");

const readline = require('readline');

// create interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculator() {
    console.log("\nWelcome to the calculator!");
    console.log("Enter your calculation in the format: number operator number (e.g., 10 + 5)");
    console.log("Supported operators: +, -, *, /, %, **");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Modulus (%)");
    console.log("6. Exponentiation (**)");
    console.log("Type 'exit' to quit the calculator.\n");

    rl.question("\nchoose an option (1-5):",(choice) => {
        if (choice === '5') {
            console.log("Exiting the calculator. Goodbye!");
            rl.close();
            return;
        }
        if (!['1', '2', '3', '4'].includes(choice)) {
            console.log("Invalid option. Please choose a valid option (1-5).");
            return calculator();
        }
        rl.question("Enter the first number:", (num1Str) => {
            const num1 = parseFloat(num1Str);
            if (isNaN(num1)) {
                console.log("Invalid number. Please enter a valid number.");
                return runconsolecalculator();
            }
            rl.question("Enter the second number:", (num2Str) => {
                const num2 = parseFloat(num2Str);
                if (isNaN(num2)) {
                    console.log("Invalid number. Please enter a valid number.");
                    return runconsolecalculator();
                }
                
                let operator = '';
                if (choice === '1') {
                     operator = '+';
                }  
                if (choice === '2') {
                    operator = '-';
                }
                if (choice === '3') {
                     operator = '*';
                }
                if (choice === '4') { 
                    operator = '/';
                }

                let result;
                switch (choice) {
                    case '1':
                        result = num1 + num2;
                        console.log(`\nResult: ${num1} + ${num2} = ${result}`);
                        break;
                    case '2':
                        result = num1 - num2;
                        console.log(`\nResult: ${num1} - ${num2} = ${result}`);
                        break;
                    case '3':
                        result = num1 * num2;
                        console.log(`\nResult: ${num1} * ${num2} = ${result}`);
                        break;
                    case '4':
                        if (num2 === 0) {
                            console.log("Error: cannot divide by zero.");
                        } else {
                            result = num1 / num2;
                            console.log(`\nResult: ${num1} / ${num2} = ${result}`);
                        }
                        break;
                }
                runconsolecalculator();
            })
        })
    })
}



