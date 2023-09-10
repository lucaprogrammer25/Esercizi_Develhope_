const repeatHello = (callback)=>{
 setInterval(callback, 1000)
};

const callBackFunc = () =>{
    console.log("hello")
};

repeatHello(callBackFunc);