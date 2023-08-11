function nicknameMap(persons) {
  const nickname = [];
  
  for (let i = 0; i < persons.length; i++) {
    const nicknames = `${persons[i].nome}-${persons[i].età}`;
    nickname.push(nicknames); //
  }
  
  return nickname;
} 

const persone = [
  { nome: 'Paul', età: 16 },
  { nome: 'George', età: 17 },
  { nome: 'Lucas', età: 21 },
  { nome: 'Marco', età: 32 },
  { nome: 'Peter', età: 18 },
  { nome: 'Carl', età: 13 },
  { nome: 'Simon', età: 24 },
  { nome: 'Mark', età: 15 },
  { nome: 'Sandra', età: 34 },
  { nome: 'Alice', età: 28 }
];

const nicknames = nicknameMap(persone);
console.log(persone);
console.log(nicknames);