const product = [
    { name: 'laptop', price: 40010, quantity: 1 },
    { name: 'phone', price: 10000, quantity: 1 },
    { name: 'shirt', price: 1440, quantity: 1 },
    { name: 'pan', price: 1330, quantity: 1 },
    { name: 'headphone', price: 1330, quantity: 1 },
    { name: 'T-shirt', price: 1110, quantity: 5 },
];

// let totalPrice = 0;
// for (let products of product) {
//     const total = products.price * products.quantity;
//     totalPrice = totalPrice + total;
// }
// console.log(totalPrice);

function totalCard(products) {
    let total = 0;
    for (let product of products) {
        const totalPrice = product.price * product.quantity;
        total = total + totalPrice;
    }
    return total;
}
const totalPrice = totalCard(product);
console.log(totalPrice);