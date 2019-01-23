// Spread operator ... it will spread, or unpack, the content of the array

const arr = [1, 2, 3, 4];
const max = Math.max(...arr);
console.log(max); //4


// Destructuring Assignment
var vowels = {x: 3.6, y: 7.4, z: 9.99};
const {x, y, z} = vowels;
const {x: a, y: b, z: c} = vowels;
console.log(a); // 3.6
console.log(x); // 3.6

const a = {
    start: {x: 5, y: 6},
    end:   {x: 6, y: -9}
};

const {start: {x: startX, y: startY}, end: {x:endX, y:endY}} = a;
console.log(startX, startY); // 5, 6
console.log(endX, endY); // 6, -9

// Use Destructuring Assignment to Assign Variables from Arrays
const [a, b,,,c] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, c) // 1, 2, 5

//Example
let a = 8, b = 6;
(() => {
    [a, b] = [b, a];
})();

console.log(`a = ${a}`); // a = 6
console.log(`b = ${b}`); // b = 8

//  Destructuring Assignment with the Rest Operator to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => {
    const[ , , ...arr] = list; // Destructuring with Rest operator
    return arr;
};

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);