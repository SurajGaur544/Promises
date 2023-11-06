function promiseMe(time, data){
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve (data);
        }, 5000);
    })
    return myPromise;
}
async function executePromise() {
    try{
        let result = await promiseMe(6000, "welcome to promise page async await handle error by try and catch ");
        console.log("try block"+result);
        document.getElementById("para4").innerHTML = result;
    }catch(err){
        console.log("call error messase"+err);
    }
    
}
executePromise();