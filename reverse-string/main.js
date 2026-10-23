//built-in-methods
function reverseStringBuiltIn(str){
    //validate input type
    if (typeof str !== 'string') return "";

    return str.split('').reverse().join('');

}
console.log(reverseStringBuiltIn("hello")); // Output: "olleh[span_8](start_span)"[span_8]end_span)

//manual loop
function reverseStringLoop(str) {
    if (typeof str !== 'string') return "";

    let reversedResult = "";

    //Iterate backwards from the last character to the first character
    for (let i = str.length - 1; i >= 0; i--) {
        reversedResult += str[i];
    }
    return reversedResult;
}

console.log(reverseStringLoop("hello")); // output: "olleh[span_9](start_span)"[span_9](end_span)