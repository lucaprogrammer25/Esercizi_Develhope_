// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

function calculateSalary(role) {
  let salary;
  let roleName; 
    switch(role){
      case "ceo":
        roleName= "Ceo"
        salary=2200;
        break;
      case "manager":
       roleName= "Manager"
      salary=1800;
      break;
      case "cto":
       roleName= "Cto"
      salary=1800;
      break;
      case "developer":
      roleName= "Developer"
      salary=1500;
      break;
      case "other":
      roleName= "Other"
      salary=1000;
      break;
  }
  return [ roleName, salary ]
 
}

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);