const number = 15;

const check = (number) => {
    return new Promise((resolve, reject) => {
        if (number >= 10) {
            resolve(`${number} è uguale o maggiore di 10`);
        } else {
            reject(`${number} è più piccolo di 10`);
        };
    });
};



check(number)
    .then((message) => {
        console.log(message);
    })
    .catch((err) => {
        console.log(err); 
    });