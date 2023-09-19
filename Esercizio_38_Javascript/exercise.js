const checkLogged = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged === true) {
            resolve(Math.random())
        } else {
            reject("L'utente non è connesso")
        };
    });
};

const randomNumberCheck = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 0.5) {
            resolve({ nome: "John", età: 24 })
        } else {
            reject("Error")
        };
    });
};


const isLogged = true;

checkLogged(isLogged)
    .then((number) => {
        console.log(number)  //ho aggiunto questo console.log per rendermi conto se il tutto funzionasse, è omissibile
        return randomNumberCheck(number);
    })
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.error(err);
    });
   
