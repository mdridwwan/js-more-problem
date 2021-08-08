/* function largestElement(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}
const largestNumbers = largestElement([12, 23, 34, 45, 56]);
console.log(largestNumbers); */

function largestElement(numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}
const largestNumbers = largestElement([5, 12, 23, 34, 45, 56]);
console.log(largestNumbers);