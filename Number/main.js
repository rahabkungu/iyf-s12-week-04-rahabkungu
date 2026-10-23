//Using manual loop

function findLargestLoop(arr) {
    
    if (arr.length === 0){
        return null;
    }

    let currentMax = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > currentMax) {
            currentMax = arr[i]; //Update max tracker
        }
    }
    return currentMax;
}
console.log(findLargestLoop([3,7,2,9,5])); //Output: 9

//using reduced

function findLargestReduce(arr) {
    if (arr.length === 0) return null;
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);

}
console.log(findLargestReduce([3, 7, 2, 9, 5])); //Output:9