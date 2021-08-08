const phones = [
    { name: 'Samsung m30', price: 40300, camera: 32, storage: 64 },
    { name: 'Xaomi node-8', price: 12000, camera: 24, storage: 32 },
    { name: 'Waltone Zone', price: 8000, camera: 12, storage: 22 },
    { name: 'Waltone k32', price: 10000, camera: 16, storage: 32 },
    { name: 'Huawei p30', price: 35000, camera: 128, storage: 256 },
    { name: 'Oppo F11', price: 5000, camera: 32, storage: 32 },
    { name: 'Vivo Y90', price: 90000, camera: 12, storage: 32 }
];

function cheapestPhone(phones) {
    let cheapset = phones[0];
    for (let phone of phones) {
        if (phone.price < cheapset.price)
            cheapset = phone;
    }
    return cheapset;
}

const cheapsetPrice = cheapestPhone(phones);
console.log(cheapsetPrice);