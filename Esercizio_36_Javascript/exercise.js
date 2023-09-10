const repeatHello = (callback) => {
    const seIntervalCallBack = setInterval(callback, 1000);
    setTimeout(() => {
        clearInterval(seIntervalCallBack)
    }, 5000);
}
const callBackFunc = () => {
    console.log("hello")
};

repeatHello(callBackFunc);
