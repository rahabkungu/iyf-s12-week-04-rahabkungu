function fizzBuzz() {
    // Loop through numbers 1 to 100
    for (let i = 1 ; i <= 100; i++) {
        // check for multiple of BOTH 3 and 5 first
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }
        //check for multiple of 3 only
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        //check for multiple of 5 only
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        //if it's a regular number, print the number itself
        else { 
            console.log(i);
        }
    }
}
//execute the function
fizzBuzz();