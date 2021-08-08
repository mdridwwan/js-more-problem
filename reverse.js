let greetings = 'hellow';

function reversString(text) {
    let revers = '';
    for (const letter of text) {
        revers = letter + revers;
        // console.log(revers);
    }
    return revers;
}
const reversed = reversString(greetings);
console.log(reversed)