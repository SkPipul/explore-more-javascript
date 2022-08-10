const names = ['abul', 'babul', 'abul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'bulbul', 'gabul', 'habul', 'cabul'];
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const list = removeDuplicate(names);
console.log(list);