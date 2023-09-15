const user = {
  id: 1,
  name: "John",
  age: 25,
};


const outError = (error) => {
  console.error(error);
};


const localStorageFunc = () => {
  try {

    const stringUser = JSON.stringify(user);
    localStorage.setItem("user", stringUser);
    console.log("Operazione completata, oggetto aggiunto");
  }

  catch (error) {
    outError("Si è verificato un errore, impossibile aggiungere l'oggetto")
  }

}


const printLocalStorage = () => {
  try {
    const userPrint = localStorage.getItem("user");
    const userParsed = JSON.parse(userPrint);
    console.log(userParsed);

  } catch (error) {
    outError("Si è verificato un errore, impossibile recuperare i dati da LocalStorage")

  }

}


const init = () => {
  localStorageFunc();
  printLocalStorage();
}

init();