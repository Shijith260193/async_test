function doubleAfter2Seconds(x) {
    return new Promise((resolve,reject) => {
        if(typeof x != "number"){
            return reject("rejected");
        }
      setTimeout(() => {
        resolve(x * 1);
      }, 2000);
    });
  }
  
  async function addAsync(x) {
    const a = await doubleAfter2Seconds('10').catch((err) => { console.log(err)});
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    let result = await Promise.all([a,b,c]);
    return result;
  }
  
  
  addAsync(10).then((sum) => {
      let sum1 = sum.filter(each => typeof each != undefined)
        console.log(sum1);
  }).catch((err) => {
      console.log(err)    
  });

  

  let async = require("./microservices/src/corebanking-service/src/node_modules/async");
  let request = require("./microservices/src/corebanking-service/src/node_modules/request");
  let rp = require("./microservices/src/corebanking-service/src/node_modules/request-promise");
  
  
  // function doubleAfter2Seconds(x) {
  //     return new Promise((resolve,reject) => {
  //         if(typeof x != "number"){
  //             return reject("rejected");
  //         }
  //       setTimeout(() => {
  //         resolve(x * 1);
  //       }, 2000);
  //     });
  //   }
    
  //   async function addAsync(x) {
  //     const a = await doubleAfter2Seconds('10').catch((err) => { console.log(err)});
  //     const b = await doubleAfter2Seconds(20);
  //     const c = await doubleAfter2Seconds(30);
  //     let result = await Promise.all([a,b,c]);
  //     return result;
  //   }
    
    
  //   addAsync(10).then((sum) => {
  //       let sum1 = sum.filter(each => typeof each != undefined)
  //         console.log(sum1);
  //   }).catch((err) => {
  //       console.log(err)    
  //   });
  
  
  
      let v;
      let developersMailList = {
          "mail50":[],
          "mail70":[],
          "mail90":[],
          "mail0":[]
          
      }
      
      function test1(email){
          return new Promise((resolve,reject)=>{
              let options = {
                  "method":"GET",
                  "uri":`https://api.enterprise.apigee.com/v1/mint/organizations/psma/developers/${email}/developer-balances`,
                  "headers":{
                      "authorization":"Basic ZGFudXNoQGRpZ2l0YWxhcGljcmFmdC5jb206RGFuMDgwNDE5OUA="
                  }
              };
              rp.get(options)
              .then((data) =>{
                  let developerBalanceResp = JSON.parse(data);
                  var planAmount = developerBalanceResp.developerBalance[0].amount;
                  var usage = developerBalanceResp.developerBalance[0].usage;
                  var percentageUsed = 700/1000*100;
                  
                  if(percentageUsed == 50){
                      developersMailList["mail50"].push(email);
                  }
                  else if(percentageUsed == 70){
                      developersMailList["mail70"].push(email);
                  }
                  else if(percentageUsed == 90){
      
                      developersMailList["mail90"].push(email);
                  }
                  
                  
                  return resolve("done");
              })
              .catch((err) => {
                  
                      return reject("rejected");
                  
                  
              })
      
          });
      }
      async function test(){
          let arr = [
              "neena+test@digitalapicraft.com",
              "dineshp@digitalapicraft.com",
              "senthil+minttest5@digitalapicraft.com",
              "sudheesh@digitalapicraft.com",
              "nickneal-22-11@mailinator.com",
              "garry.kirkwood@gmail.com"
      
          ]
          for(let i of arr){
              let b = await test1(i).catch((err)=> {if (err == 'rejected') {
                  developersMailList.mail0.push("mailid");
              }});
          }
         
          
      }
      
      test().then((data) => {
          console.log(developersMailList);
          
      }).catch((err) => {console.log("error")});
  
  
  
  
  
  
  
  
    