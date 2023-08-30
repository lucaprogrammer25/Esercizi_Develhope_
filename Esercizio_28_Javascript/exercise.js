function sum(...number) {
  return number.reduce((acc,val)=> acc+val, 0)
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));