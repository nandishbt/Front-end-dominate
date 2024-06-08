// function abcd(callback){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(raw=>raw.json())
//     .then(result=>{
//         callback(result);
//     })
// }

// abcd(result=>console.log(result));



// using promise

// var a = new Promise((res,rej)=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(raw=>raw.json())
//     .then(result=>{
//         if(result.id==1){
//             res(result);
//         }
//         else{
//             rej();
//         }
//     })
// })


// a.then(result=>console.log(result))
// .catch(()=>console.log("not received"))



// using async/await

// async function abcd(){
//        var a  =  await fetch('https://jsonplaceholder.typicode.com/todos/1');
//        a = await a.json();
//        return a;
   
// }

//  async function a(){
//    var b =  await abcd();
//    console.log(b);
// }

// a();

