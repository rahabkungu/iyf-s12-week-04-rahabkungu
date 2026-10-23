const check = (label, actual, expected) =>
    console.log(`${actual === expected} ${label}: ${actual}` +
        (actual === expected ? "" : ` (expected ${expected}`));


//1. Variables
const myName = "Rahab Kungu";
const age = 21;
const isStudent = true;
const favouriteColours = ["purple", "gold", "green"];
const today = new Date(13/"10"/2026);

console.log(myName, typeof myName);     //string
console.log(age, typeof age);           //number
console.log(isStudent, typeof isStudent); //boolean
console.log(favouriteColours, typeof favouriteColours);  // object
console.log(today.toDateString(), typeof today);    //object

// 2. Operators
const ageIndays = age * 365;
const ageInhours = ageIndays * 24;
const yearTurn100 = today.getFullYear() - age + 100;
console.log(`${myName} is about ${ageIndays} days (${ageInhours} hours) old and turns 100 in ${yearTurn100}.`);

check(' "5" + 3 ', "5" + 3, "53");
check('"5" - 3', "5" - 3, 2);
check('5 === "5"', 5 === "5", false);

// 3.Functions
function calculateArea(width, height) {
    return width * height;
}
const celciusToFahrenheit = (celcius) => celcius * 9 / 5 + 32;
const isEven = (number) => number % 2 === 0;
const getInitials = (fullName) =>
    fullName.trim().split("").map((part) => part[0].toUpperCase()).join("");
const reverseString = (str) => str.split("").reverse().join("");
const calculateTip = (bill, tipPercent = 15) => bill * tipPercent / 100;

check("calculateArea(4, 5)", calculateArea(4, 5), 20);
check("celciusToFarenheit(100)", celciusToFahrenheit(100), 212);
check("isEven(7)", isEven(7), false);
check('getInitials("Rahab Kungu"', getInitials("Rahab Kungu"), "RK");
check('reverseString("salon")', reverseString("salon"), "nolas");
check("calculateTip(1000)", calculateTip(1000), 150);
check("calculateTip(1000, 10)", calculateTip(1000, 10), 100);

//4.control flow
function getGrade(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

function getDayName(dayNumber) {
    switch (dayNumber){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Thursday";
        case 4: return "Friday";
        case 5: return "Saturday";
        case 6 : return "Sunday";
    }
}

check("getGrade(85)", getGrade(85), "B");
check("getGrade(59)", getGrade(59), "F");
check("getDayName(0)", getDayName(0), "sunday");
check("getDayName(9)", getDayName(9), "Invalid day");

const evens = [];
for (let i = 2; i <= 50; i += 2) evens.push(i);
check("evens 2-50 count", evens.length, 25);

for (let row = 1; row <= 5; row++){
    console.log("*".repeat(row));
}

let total = 0;
const prices = [500, 1200, 300];
for (let i = 0; i < prices.length; i++){
    total = total + prices[i];
}
check("debug: total",total,2000);

function applyDiscount(amount){
    if (amount >= 1000){
        return amount * 0.9;
    }
    return amount;
}
check("debug: applyDiscount(2000) + 100", applyDiscount(2000) + 100, 1900);

//guessing game
const secret = 7;
const checkGuess = (guess) =>
    guess > secret ? "Too high" : guess < secret ? "Too low" : "correct!";
check("checkGuess(3)", checkGuess(3), "Too low");
check("checkGuess(7)", checkGuess(7), "correct!");
