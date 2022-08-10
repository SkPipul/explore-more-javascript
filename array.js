const country = 'Bangladesh';
const age = 52;
const isIndipendent = true;
const student = {id: 102, name: 'kuddus', roll: 1, result: 'A+'};
const friends = [12, 13, 11, 14, 14, 15, 33, 22, 16];

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndipendent);
console.log(typeof student);
console.log(Array.isArray(friends));

// concat
const moreFriends = [18, 13, 11, 14, 54];
const allFriends = friends.concat(moreFriends);
console.log(allFriends)

console.log(country.includes('d'));