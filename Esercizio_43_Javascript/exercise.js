const user = {
  id: 1,
  name: "John",
  age: 25,
};

const outError = (error) => {
  console.error(error)
};
const localStorageFunc = () => {
  try {

    const stringUser = JSON.stringify(user);
    localStorage.setItem("user", stringUser);
    console.log("Operazione completata, oggetto aggiunto");
  }

  catch (error) {
    outError("Si è verificato un errore")
  }

}


const init = () => {
  localStorageFunc();
}

init();