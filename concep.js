// // array assign
// const marks = [20, 20, 10, 49, 49, 59, 59];
// marks[3] = (30);
// marks.unshift(40);
// marks.push(100);
// for (var i = 0; i < marks.length; i++) {
//     console.log(marks[i]);
// }
// // array travers
// for (value of marks) {
//     console.log(value);
// }

// array duplicate value
// let marks = [30, 20, 10, 39, 49, 40, 30, 20, 60];
// const unique = [];
// for (let value of marks) {
//     if (unique.indexOf(value) == -1) {
//         unique.push(value);
//     }
// }
// console.log(unique);

// const numbers = [20, 30, -2, 340, 39];
/* const unique = [];
for (let value of numbers) {
    if (value >= 0) {
        unique.push(value)
    } else {
        continue
    }
} */
function positiveNumbers(numbers) {
    const positive = [];
    for (let value of numbers) {
        if (value > 80) {
            positive.push(value);
        } else {
            continue;
        }
    }
    return positive;
}
const numbers = [20, 30, -2, 340, 39];
const positiveNum = positiveNumbers(numbers)
console.log(positiveNum);