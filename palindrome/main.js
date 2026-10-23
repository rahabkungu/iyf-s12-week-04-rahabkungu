function isPalindrome(str) {
    //convert to lowercase and removenon-alphanumerical characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    //reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false
console.log(isPalindrome("A man a plan a canal panama")); //true