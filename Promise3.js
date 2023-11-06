function PromiseMe(time, data){
    let myPromise = new Promise((resolve, reject) => {
      setInterval(() => {
          resolve (data);
      },time)
    });
    return myPromise;
  }
  
//   function success(a){
//       document.getElementById("para1").innerHTML=a;
//       console.log(a);
//   }
//   function failure(b){
//       document.getElementById("para1").innerHTML = b;
//       console.log(b)
//   }


  async function executePromise(){
    let result = await PromiseMe(4000,"Welcome to promises topic");
    console.log(result);
    document.getElementById("para2").innerHTML = result;
  }
  
//   function executePromise(){
//       let result = PromiseMe(3000, "Suraj Kumar");
//       result.then(success).catch(failure);
//   }
  executePromise();