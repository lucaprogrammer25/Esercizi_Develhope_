const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const key ={    //const key per filtrare id e age
  id:person.id,
  age:person.age
}


const json = JSON.stringify(key);    // modifico il parametro da person a key 

console.log(json); // Should return: { id: 1, age: 25 }