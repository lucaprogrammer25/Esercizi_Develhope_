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
.then(randomNumberCheck)
.then((message) => console.log(message))
.catch((err)=>console.error(err))
.finally(()=>console.log("Operazione compleata"))