function sum(...num) {
  return num.reduce((acc, value) => acc + value, 0)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));