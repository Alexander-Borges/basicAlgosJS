// The foundation "Basic 13" algorithm challenges.

// 1. Print all the integers from 1 to 255
for (let num = 1; num < 256; num++){
    console.log(num);
}
console.log("=============================================")

// 2. Print integers from 0 to 255, and with each integer print the sum so far. 
let sum = 0;

for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log(`Current Integer: ${i}, Running Sum: ${sum}`);
}
console.log("=============================================")

// 3. Given an array, find and print its largest element.
function findLargestElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++){
        if(arr[i] > largest) {
            largest = arr[i];
    }
}
    return largest;
}

const numbers = [4,5,6,7,8,9,98765];
const largestNumber = findLargestElement(numbers);
console.log("The largest element is: " + largestNumber);
console.log("=============================================")

// 4. Array with Odds
//Create an array with all the odd integers between 1 and 255(inclusive)
let oddArr = [];

for (let i = 1; i <= 255; i += 2) {
    oddArr.push(i);
}

console.log(oddArr);
console.log("------------------------------------------------")
// 5. Given an array and a value Y, count and print the number of array values greater than Y.
let y = 5
arr = [2,4,5,6,7,8]
count = 0;

for (let i = 0; i < arr.length;i++){
    if(arr[i] > y) {
        count++;
        console.log(arr[i])
    }
}
console.log("The number of array values greater than",y, "is:", count);
console.log("=============================================")

// 6. Given an array, print the max, min and averages for that array
let arr2 = [50,46,88, 98,26,74,8084,22,3056,126,648,528];

// Initialize max and min with the first element of the array
let max = arr2[0];
let min = arr2[0];

for (let i = 1;i< arr2.length;i++) {
    if (arr2[i] > max) {
        max = arr2[i];
    }
    if (arr2[i] < min) {
        min = arr2[i];
    }
}

let sum1 = 0;
for (let i = 0; i < arr2.length; i++){
    sum1 += arr2[i];
}
let average = sum1 /arr2.length;

console.log("Max:", max)
console.log("Min:", min)
console.log("Average:", average);
console.log("=============================================")

// 7. Swap String for Array Negative Values
// Replace any negative array values with 'Dojo'
let negArr = [-5,3,-2,1,6,33,-46];
for (let i = 0; i < negArr.length; i++) {
    if (negArr[i] < 0) {
        negArr[i] = "Dojo";
    }
}
console.log(negArr);


console.log("=============================================")

// 8. Print all odd integers from 1 to 255.
for (let oddInt = 1; oddInt < 256; oddInt++){
    if (oddInt % 2)
    console.log(oddInt)
}
console.log("=============================================")

// 9. Iterate and Print Array
// Iterate through and given array, printing each value 
let iterateArr = [1,2,3,4,5,6,7,8,9];
for (let n = 0; n < iterateArr.length; n++){
    console.log(iterateArr[n])
}
console.log("=============================================")

// 10. Get and Print Average
avgArr = [2,4,6,8,10,20,30,60];
let sumAvgArr = 0;
for (let t = 0; t < avgArr.length; t++){
    sumAvgArr += avgArr[t];
}
let sumAvgArrays = sumAvgArr /avgArr.length;
console.log(sumAvgArrays)
console.log("=============================================")
// 11. Square the Values
// Square each value in a given array, returning that same array with changed values. 
function squareArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

let unsquaredArr = [1, 2, 3, 4];
squareArray(unsquaredArr);
console.log(unsquaredArr); // This will print [1, 4, 9, 16]

// 12. Zero out Negative Numbers
// Return the given array, after setting any negative values to zero. 
function setNegativesToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}


let negativeArr = [-5,-4,-3,-2,-1,1,2,3,4,5];
let modifiedArr = setNegativesToZero(negativeArr);

console.log(modifiedArr)

// 13. Shift Array Values
// Given an array, move all values forward by one index, dropping the first and leaving a '0' value at the end. 
function shiftArrayValues(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = 0;

    return arr;
}

let myArray = [1,2,3,4,5];
let shiftedArray = shiftArrayValues(myArray);

console.log(shiftedArray);