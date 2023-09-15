const user = {
  id: 1,
  name: "John",
  age: 25,
};

const localStorageFunc = () =>{
    const stringUser = JSON.stringify(user);
    localStorage.setItem("user", stringUser);
}

const init = () =>{
  localStorageFunc();
}

init();