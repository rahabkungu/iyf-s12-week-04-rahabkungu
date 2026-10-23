//using an ES6 set

function removeDuplicatesSet (arr) {
    if (!Array.isArray(arr)) return [];

    return [...new Set(arr)];
}

console.log(removeDuplicatesSet([1, 2, 2, 3, 4, 4, 5])); //output: [1, 2, 3, 4, 5][span_15](start_span)[span_15](end_span)

//using filter

function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);

}
console.log(removeDuplicatesFilter([1, 2, 2, 3, 4, 4, 5])); //[1, 2, 3, 4, 5]
