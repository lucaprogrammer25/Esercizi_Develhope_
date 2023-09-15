const user = {
  id: 1,
  name: "John",
  age: 25,
};

const localStorageFunc = () =>{
    const stringUser = JSON.stringify(user);
    localStorage.setItem("user", stringUser);
}

const printLocalStorage = () => {
  const userPrint = localStorage.getItem("user");
  const userParsed = JSON.parse(userPrint);
  console.log(userParsed);
}

const init = () =>{
  localStorageFunc();
  printLocalStorage();
}

init();