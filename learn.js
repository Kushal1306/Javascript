const users = [ 
   { firstName: "Alok", lastName: "Raj", age: 23 }, 
   { firstName: "Ashish", lastName: "Kumar", age: 29 }, 
   { firstName: "Ankit", lastName: "Roy", age: 29 }, 
   { firstName: "Pranav", lastName: "Mukherjee", age: 50 }, 
   ]; 

   const output = users 
   .filter((user) => user.age < 30) 
   .map((user) => user.firstName); 
 console.log(output); 
// const calculateArea = function (radius) { 
// const output = []; 
// for (let i = 0; i < radius.length; i++) { 
//     output.push(Math.PI * radius[i] * radius[i]); 
//   } 
// return output; 
// }; 
// console.log(calculateArea(radius)); 
// console.log("start");

// setTimeout(function cbT() {
//     console.log("CB Netflix");
// }, 5000);
// console.log("end");

// let startDate=new Date().getTime();
// console.log(startDate);

// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log(endDate);
// console.log("while ends");
// fetch("https://api.netflix.com").then(function cbF(){
// console.log("CB Netflix");
// });
// console.log("start");
// setTimeout(()=>{
//    console.log("callback");

// },0);
// console.log("END");


// setTimeout(cb,timer);

// setTimeout(callback,timer);

// let b = 100; 
// { 
// let b = 10; 
//  var a = 10; 
// const c = 30; 
// console.log(b);
//  } 
// console.log(b);
// function x(){
//    xy=10;
//    function y(){
//    console.log(xy);
//    }
//    y();
// }
// console.log(xy);
// x();
 
// const users = [ 
//     { firstName: "Alok", lastName: "Raj", age: 23 }, 
//     { firstName: "Ashish", lastName: "Kumar", age: 29 }, 
//     { firstName: "Ankit", lastName: "Roy", age: 29 }, 
//     { firstName: "Pranav", lastName: "Mukherjee", age: 50 }, 
//     ]; 

// const ans=users.map((user)=>user.firstName+" "+user.lastName);
// console.log(ans);

// async function getData(){
//     return "Kushal";
// }
// const data=getData();

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved succesfully");
//     },5000);
// })

// function getPromsie(){
//     pr.then((res)=>console.log(res));
//     console.log("hiuii kya bolti pub;lci");
// }


// getPromsie();

// async function getData(){
//     const data=await pr;
//     console.log(data);
//     console.log("hii ksuhal here");
// }

// const url="https://api.github.com/users/Kushal1306";
// async function handlePromise(){
//    try {
//     const data=await fetch(url);
//     const jsonval=await data.json();
//     console.log(jsonval);
//    } catch (error) {
//     console.log(error);
//    }
   
// }
// handlePromise();

//getData();
// const promisedata=getData();
// promisedata.then((res)=>console.log(res));
//console.log(data);

// const cart=["apple", "banana","carrot"];
// createOrder(cart).then(
//     function(orderId){
//         console.log(orderId);
//         return orderId;
//     }
// ).then(function(orderId){
//     return Proceedtopayement(orderId);
// })
// function createOrder(cart){
//     const promise=new Promise(function(resolve,reject){
//      if(!ValidityState(cart)){
//         const err=new Error("cart is not valid");
//         reject(err);
//      }
//      const orderId="12345";
//      if(orderId){
//         resolve(orderId);
//      }
//     });
//     return promise;
// }

// function showSummary(orderId){
//     const promise=new Promise(function(resolve,reject){
//         if(!validatePayment(orderId)){
//             const err=new Error("Payement unsuccesfull");
//             reject(err);
//         }
//         const order=showSummaryodorder(orderId);
//         resolve(order);
//     });
//     return promise;
// }

// const url="https://api.github.com/users/alok722";
// const user=fetch(url);
// user.then(function(data){
// console.log(data);
// });

// createOrder(cart).then(function(orderId){
// return proceedtoPyament(orderId);
// })
// .then(function(paymentinfo){
//     return showordersummary(paymentinfo);
// })
// .then(function(balance){
//     return updatebalance(balance);
// })


// const arr=[1,2,3,4];
// function findsum(arr){
//     let sum=0;
// for(let i=0;i<arr.length;i++){
// sum+=arr[i];
// }
// return sum;
// }
// console.log(findsum(arr));

// const output=arr.reduce((accumulator,current)=>{
//     accumulator=accumulator+current;
//     return accumulator;
// });

// console.log(output);

// const ot=arr.reduce((accumulator,current)=>{
// if(current>accumulator){
//     accumulator=current;
// }
// return accumulator;

// });


// const calculate=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//     output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// };
// console.log(calculate(radius));
// function isOdd(r){
//     return r%2;
// }
// const ans=radius.filter(isOdd);
// console.log(ans);
// const area=function(r){
//     return Math.pi*r*r;
// }

// const arrr=radius.map(area);
// console.log(arrr);

// console.log("start");
// setTimeout(function(){
// console.log("callback");
// },0);
// console.log("end");
// console.log("start");

// setTimeout(function cbT() {
//     console.log("CB Netflix");
// }, 5000);
// console.log("end");

// let startDate=new Date().getTime();
// console.log(startDate);

// let endDate=startDate;
// while(endDate<startDate+10000){
//     endDate=new Date().getTime();
// }
// console.log("while ends");
// fetch("https://api.netflix.com").then(function cbF(){
// console.log("CB Netflix");
// });


// var x=function(){
//     console.log("hii im kushal jain");
// };
// x();


// function xy(){
// for(var i=1;i<=5;i++){
//     function close(i){
//     setTimeout(function()
//     {console.log("hii im kushal jain");
// },i*1000);
//     }
//     close(i);
// }
// }
// xy();
// function xy(){
// setTimeout(function(){
//     console.log("Hi im kushal");
// },3000);

// setTimeout(() => {
//     console.log("hii im kushal");
// }, 3000);
// }

// xy();

// var c = 100; 
// function x() { 
// // var c = 10; 
// console.log(c); // 10
//  } 
// x(); 
// console.log(c); 
// let data = {
//     message: "Hello world",
//     replies: [
//         {
//             message: "hi",
//             replies: [
//                 {
//                     message: "Hey",
//                     replies: [
//                         {
//                             message: "How are you?",
//                             replies: []
//                         },
//                         {
//                             message: "I'm good!",
//                             replies: []
//                         }
//                     ]
//                 },
//                 {
//                     message: "Hello!",
//                     replies: []
//                 }
//             ]
//         }
//     ]
// };
// function printMessages(data) {
//     console.log(data.message);
//     if(data.replies.length>0){
//         for(let reply of data.replies)
//         {
//             printMessages(reply);
//         }
//     }
// }
// printMessages(data);

// function outer(){
//     let vali=10;
//     return function(){
//         return vali++;
//     };
// }
// const inner=outer();
// console.log(inner());
//console.log(inner());
// const cart=["pant","kurta"];
// createOrder(cart)
//    .then(function(orderId){
//     console.log("order id generated is",orderId)
//     return orderId;
// })
// .then(function(orderId)
// {
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo)
// {
//     console.log(paymentInfo);
// })
// .catch(function(err)
// {
//     console.log(err.message);
// });

// //creating promises
// function createOrder(cart){
//     const pr=new Promise(function(resolve,reject){
//        if(!validateCart(cart))
//         {
//             const err=new Error("cart is not valid");
//             reject(err);
//         }
//         const orderId="13455";
//         if(orderId)
//         {  
//             setTimeout(function()
//             {
//                 resolve(orderId);
//             },3000);
        
//         }
//     });
//     return pr;
// }

// function proceedToPayment(orderId)
// {
//     return new Promise(function(resolve,reject)
//     {
//         resolve("Payment successfull");
//     });
// }

// function validateCart(cart){
//     if(cart.length===0)return false;
//     return true;}

// createorder(cart,function (orderId){
//     proceedtoPayment(orderId,function(paymentInfo){
//         showOrderSummary(paymentInfo,function() {
//             updateWalletBalance();
//         });
//     });

// });

// createorder(cart)
// .then(function(orderId){
//     proceedtoPayment(orderId);
// })
// .then(function(paymentInfo){
//     showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo)
// {
//     updateWalletBalance(paymentInfo);
// })

// createorder(cart)
// .then(function(orderId){
//     return proceedtoPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo)
// {
//     return updateWalletBalance(paymentInfo);
// })

// createorder(cart)
// .then((orderId)=>proceedtoPayment(orderId))
// .then((paymentInfo)=>showOrderSummary(paymentInfo))
// .then((paymentInfo)=>updateWalletBalance(paymentInfo));

// createOrder(cart,function(orderId){
//     proceedToPayement(orderId);    
// });

// const promise=createOrder(cart);
// promise.then(function(orderId)
// {
//     proceedToPayement(orderId);
// });

//  const arr=[1,2,5,3,4];
//   const output=arr.reduce(function(acc,curr)
//   {
//     if(curr>acc)
//     {
//         acc=curr;
//     }
//     return acc;
//   },0)
//   console.log(output);
//   function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum;
//     }
    
//       console.log(findSum(arr));
// const output=arr.filter((x)=> x>4);
// console.log(output);
// const arr=[1,2,3,4,5];

// const output=arr.map(function binary1(x)
// {
//     return x.toString(2);
// });



// const arr=[1,2,3,4,5];
// function double(a)
// {
//     return 2*a;
// }
// const output=arr.map(double)
// console.log(output);
// const arr1=[1,2,3,4,5];
// function triple(a)
// {
//     return 3*a;
// }
// console.log(arr1.map(triple));


// const radius=[1,2,3,4,5];
// const area=function(radius){
//     return Math.PI * radius*radius;

// }

// const calculate=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//  output.push(logic(radius[i]));
//     }
//     return output;

// };
// console.log(calculate(radius,area));
// console.log(radius.map(area));
// function x(){
//     console.log("I'm kushal");
// }
// function y(x){
// x();
// }
// y(x);
// console.log("start");
//  setTimeout(function a(){
//  console.log("timer here");
//  },5000);
//  console.log("end");

//  let startDate=new Date().getTime();
//  console.log(startDate);
//  let endDate=startDate;
//  while(endDate<startDate+10000)
//  {
//     endDate=new Date().getTime();
//  }
//  console.log("while expires");
// function addevent()
// {
//     let count=0;
//     document.getElementById("clickme").addEventListener("click",function kkj()
//     {
//     console.log("Button Clicked",++count);
//     });
// }
// addevent();
// setTimeout(function(){
// console.log("Jai Kushal");
// },5000);

// function x(y)
// {
//     console.log("x");
//     y();
// }
// x(function y()
// {
//     console.log("y");
// });

// setTimeout(function(){
// console.log("i'm kushal");
// },6000);
// a();
// function a()
// {
//     console.log("I'm kusal jain");
// }
// b();

// var b=function(){
//     console.log("im b");

// }

// function counter(){
//     var count=0;
// return function inccounter()
// {
//     count++;
//     console.log(count);
// }
// }
// var incre=counter()()
// incre();
// incre();
// function outter()
// {
//     var a=10;
//     function inner()
//     {
//  console.log(a );
//     }
//     return inner;
// }
// var x=outter();
// x();

/* or */
// outter()();
// function x(){
//     for(var i=1;i<=5;i++) { 
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//                },x*1000);
//         }
//         close(i);
//     }
//     console.log("Namaste Kushal"); 
// }
// x();
// function x()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function(){
//          console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste Kushal");
// }
// x();
// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         setTimeout(function(){
//          console.log(i);
//         },i*1000);
//     }
//     console.log("Namaste Kushal");
// }
// x();
// function x()
// {
//     var i=1;
//     setTimeout(function(){
//         console.log(i); 

//     },3000);
//     console.log("Namaste Kushal");
// }
// x();


// function z()
// {
//     var b=900;
//     function x()
//     {
//         var a=7;
//         function y()
//         {
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();

// function x()
// {
//     var a=7;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();

// const c=100;
// function kushal()
// {
//     const c=50;
//     console.log(c);
// }
// kushal();
// console.log(c);

// let b=40;
// {
//     var a=10;
//     let b=20;
//     const c=30;
// }
// console.log(b);

// {
//  const x=10;
// }
// console.log(x);



// console.log(a);
// let a=10;
// var b=100;
// var x=1;
// a();
// b();
// console.log(x);
// function a()
// {
//     var x=10;
//     console.log(x);
// }
//  function b()
//  {
//     var x=100;
//     console.log(x);
//  }







// getName();
// console.log(x);
// var x=7;
// function getName()
// {
//     console.log("Namaste Kushal");
// }
// // getName();
// console.log(x);
