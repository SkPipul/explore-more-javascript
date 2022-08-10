let phones = [
    { brand: 'iPhone', model: '13 pro max', color: 'sky blue', storage: '264 gb', price: 115000, quantity: 1 },
    { brand: 'Walton', model: 'primio', color: 'blue', storage: '128 gb', price: 17000, quantity: 2 },
    { brand: 'Xiomi', model: 'note 10 pro', color: 'white', storage: '128 gb', price: 25000, quantity: 3 },
    { brand: 'One plus', model: '9 pro', color: 'white', storage: '128 gb', price: 50000, quantity: 2 },
    { brand: 'Oppo', model: 'note 9 pro', color: 'white', storage: '128 gb', price: 20000, quantity: 2},
    { brand: 'Poco', model: 'X3 pro', color: 'blue', storage: '128 gb', price: 16500, quantity: 3 }
]

// let cheapest = phones[0];
// function cheapestPhones(phones) {
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price < cheapest.price) {
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const myChoice = cheapestPhones(phones);
// console.log(myChoice);

// let expensive = phones[0];
// function cheapestPhones(phones) {
//     for (let i = 0; i < phones.length; i++) {
//         const phone = phones[i];
//         if (phone.price > expensive.price) {
//             expensive = phone;
//         }
//     }
//     return expensive;
// }
// const myChoice = cheapestPhones(phones);
// console.log(myChoice);



let sum = 0;
function totalCostofPhones(phones) {
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        const totalPhones = phone.price * phone.quantity;
        sum = sum + totalPhones;
        // console.log(phones);
    }
    return sum;
}
const totalCost = totalCostofPhones(phones);
console.log(totalCost);