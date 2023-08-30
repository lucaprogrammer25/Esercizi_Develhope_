function sum(...number) {
    return number.reduce((acc,val)=> acc + val, 0)
}

console.log(sum(1, 2, 3, 4, 5));