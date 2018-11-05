/*

// // let a = [10,20,30,40,60]

// // console.log(a.length)
// // a.forEach((data) => {
// //     a.push('100')
// //     console.log(a)
// // })

// // console.log(a)


// // let b = null
// // let c = !b ? 0 : "hello";


// // console.log(c)


// // function test () {
// //     return 1;
// // }

// // function test1(){
// //     let q = test();
// //     console.log(q)
    

// // }
// // test1()









// let async = require("./microservices/src/corebanking-service/src/node_modules/async");

// // async.parallel({
// //     one: function(callback) {
// //         console.time("hello")
// //         callback(null, 'abc\n');
// //         console.timeEnd("hello")
// //     },
// //     two: function(callback) {
// //         console.time("hello1")
// //         callback(null, 'xyz\n');
// //         console.timeEnd("hello1")
// //     }
// // }, function(err, results) {
// //     // results now equals to: results.one: 'abc\n', results.two: 'xyz\n'
// //     console.log(results)
// // });


// // var q = async.queue(function(task, callback) {
// //     console.log('hello ' + task.name);
// //     callback();
// // }, 2);

// // q.push({name: 'foo'}, function(err) {
// //     console.log('finished processing foo');
// // });

// // q.push({name: 'food'}, function(err) {
// //     console.log('finished processing foo');
// // });





// // function test1 (){
// //     let async = require("./microservices/src/corebanking-service/src/node_modules/async");
// //     async.waterfall([
// //         function a (callback){
// //             let s = "shijith"
// //             console.log("a")
// //             setTimeout(function(){
// //                 console.log("hello");
// //             },2000)
// //             console.log("hello");
// //             return callback(null,s);
// //         },
// //         function b(xyz,callback){
            
// //             console.log(xyz)
// //             return callback(null,xyz)
// //         },
// //         function c (test1, callback){
// //             console.log(test1);
// //             async.parallel({
// //                 one: function(callback) {
// //                     test1 = 23;
// //                     callback(null, test1);
                    
// //                 },
// //                 two: function(callback) {
                    
// //                     callback(null, test1);
                    
// //                 }
// //             }, function(err, results) {
// //                 // results now equals to: results.one: 'abc\n', results.two: 'xyz\n'
// //                 console.log(results)
// //                 callback(null,results)
// //             });
// //         }
    
// //     ], function(error, success ){
// //         console.log(success)
// //         //return success;
// //     });
    
// // }





// function z(a){
//     console.log(a);
//     let r = require("./microservices/src/payment-service/src/node_modules/request");
//     let rp = require("./microservices/src/payment-service/src/node_modules/request-promise");
//     let body = {
//         "EmailId":[a],
//         "subject":"test mail from EC2 for DAC",
//         "text":"parallel"
//     }
//     rp.post({
//         "uri":"https://ec2-13-232-19-83.ap-south-1.compute.amazonaws.com/v1/mailsender",
//         "headers": {"Content-Type":"application/json"},
//         "body": body,
//         "rejectUnauthorized":false,							
//         "json":true
//     })
//     .then((data) => {
//         console.log("done");
//     })
//     .catch((err)=> {
//         console.log(err);
//     });

// };



// async.map(['shijith@digitalapicraft.com','shijiththomas2@gmail.com'],z,function(err, res) {
//     console.log(res)
// });
















// // var q =test1()
// // console.log(q)
*/




let async = require("./microservices/src/corebanking-service/src/node_modules/async");
function z(a){
    console.log(a);
    let r = require("./microservices/src/payment-service/src/node_modules/request");
    let rp = require("./microservices/src/payment-service/src/node_modules/request-promise");
    let body = {
        "EmailId":[a],
        "subject":"test mail from EC2 for DAC",
        "text":"parallel"
    }
    rp.post({
        "uri":"https://ec2-13-232-19-83.ap-south-1.compute.amazonaws.com/v1/mailsender",
        "headers": {"Content-Type":"application/json"},
        "body": body,
        "rejectUnauthorized":false,							
        "json":true
    })
    .then((data) => {
        console.log("done");
    })
    .catch((err)=> {
        console.log(err);
    });

};

// z('shijith@digitalapicraft.com');

async.map(['shijith@digitalapicraft.com','shijiththomas2@gmail.com'],z,function(err, res) {
    console.log(res)
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








