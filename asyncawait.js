const api_url="https://apigithub.com/users/Kushal1306";
async function handlePromise()
{
        const data= await fetch(api_url);
        const jsonValue= await data.json();
        console.log(jsonValue);
     //fetch() => Response.json() =>jsonvalue
}
handlePromise().catch((error)=>console.log(error));
// async function handlePromise()
// {
//     try {
//         const data= await fetch(api_url);
//         const jsonValue= await data.json();
//         console.log(jsonValue);
//     } catch (error) {
//         console.log(error)
//     } //fetch() => Response.json() =>jsonvalue
// }
//handlePromise();
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise1 resolved successfully");
//     },10000);
// });

// const pr2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise 2 resolved successfully");
//     },5000);
// });
// async function handlePromise(){
//  console.log("im kushal");
//     const val=await pr2;
//     console.log(val);
//     console.log("Namaste Kushal");
//     const val1=await pr;
//     console.log(val1);
//     console.log("Namaste Kushal");
// }
// handlePromise();  
// function getData()
// {
//     pr.then((res)=>console.log(res));
//     console.log("Namaste Kushal");
// }
// getData();

// async function handlePromise()
// {
//     const val=await pr;
//     console.log(val);

// }
// handlePromise();
// function getData()
// {
//     pr.then((res)=>console.log(res));
// }

// getData();
// async function getData()
//  {
//     return pr
//  }
//  const dataPromise=getData();

//  dataPromise.then((res)=>console.log(res));

