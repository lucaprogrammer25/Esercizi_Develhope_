const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

const keys = Object.keys(person)

for (value of keys){
  console.log(`${value}: ${person[value]}`)
}
