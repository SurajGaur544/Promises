function PromiseMe(time,data) {
    let myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (data);
        }, time)
    })
    return myPromise;
}

function success(a) {
   // document.getElementById("para").textContent(a)
    console.log(a);
}
function failure(b) {
   // document.getElementById("para").textContent(b)
    console.log(b);
}

function executePromise() {
    let result = PromiseMe(2000, "Hello Suraj");
    result.then(success).catch(failure);
}
executePromise();