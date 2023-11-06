function PromiseMe(time, data){
  let myPromise = new Promise((resolve, reject) => {
    setInterval(() => {
        resolve (data);
    },time)
  });
  return myPromise;
}

function success(a){
    document.getElementById("para1").innerHTML=a;
    console.log(a);
}
function failure(b){
    document.getElementById("para1").innerHTML = b;
    console.log(b)
}

function executePromise(){
    let result = PromiseMe(3000, "async await handle error by then and catch");
    result.then(success).catch(failure);
}
executePromise();