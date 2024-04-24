const cart=["pant","kurta"];
createOrder(cart)
   .then(function(orderId){
    console.log("order id generated is",orderId)
    return orderId;
})
.then(function(orderId)
{
    return proceedToPayment(orderId);
})
.then(function(paymentInfo)
{
    console.log(paymentInfo);
})
.catch(function(err)
{
    console.log(err.message);
});

//creating promises
function createOrder(cart){
    const pr=new Promise(function(resolve,reject){
       if(!validateCart(cart))
        {
            const err=new Error("cart is not valid");
            reject(err);
        }
        const orderId="13455";
        if(orderId)
        {  
            setTimeout(function()
            {
                resolve(orderId);
            },3000);
        
        }
    });
    return pr;
}

function proceedToPayment(orderId)
{
    return new Promise(function(resolve,reject)
    {
        resolve("Payment successfull");
    });
}

function validateCart(cart){
    if(cart.length===0)return false;
    return true;}

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

