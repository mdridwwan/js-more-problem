function duplicateName(names) {
    let uniuqe = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];

    //for of//
    for (const element of names) {
        if (uniuqe.indexOf(element) == -1) {
            uniuqe.push(element);
        }

    }
    return uniuqe;
}
let names = ['abul', 'babul', 'cabul', 'dabul', 'kabul', 'abul', 'cabul', 'rabul', 'jabul'];
const uniuqeName = duplicateName(names);
console.log(uniuqeName);