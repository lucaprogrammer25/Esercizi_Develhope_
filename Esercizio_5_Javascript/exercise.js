const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon"  //L'oggetto person2 fa riferimento all'oggetto person1 per questo la 
                             //modifica avviene in entrambi gli oggetti.

console.log(person1);
console.log(person2);
