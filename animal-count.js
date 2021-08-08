function animalCount(miles) {
    const animalsDensityFirst10Miles = 10;
    const animalsDensitySecond10Miles = 50;
    const animalsDensityThired10Miles = 100;

    if (miles <= 10) {
        const count = miles * animalsDensityFirst10Miles;
        return count;
    } else if (miles <= 20) {
        const firstDensAnimals = 10 * animalsDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDensAnimals = restMiles * animalsDensitySecond10Miles;
        const totalAnimals = firstDensAnimals + secondDensAnimals;
        return totalAnimals;
    } else {
        const firstDensAnimals = 10 * animalsDensityFirst10Miles;
        const secondDensAnimals = 10 * animalsDensitySecond10Miles;
        const restMiles = miles - 20;
        const thiredDensityAnimals = restMiles * animalsDensityThired10Miles;
        const totalAnimals = firstDensAnimals + secondDensAnimals + thiredDensityAnimals;
        return totalAnimals;
    }
}
const animals = animalCount(105);
console.log(animals);

// let sum = 0;
// for (let i = 0; i <= 3; i++) {
//     sum = sum + i;

// }
// console.log(sum)

// let number = 0;