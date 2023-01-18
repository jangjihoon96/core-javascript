

import { insertLast, xhrData, xhrPromise, jihoon, delayP } from "./lib/index.js";


// xhrData 사용해보기 {#fff}
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result)=>{
//     console.log(result)
//     insertLast('body',JSON.stringify(result))
//     // insertLast('body',JSON.stringify(result.name))
//   },
//   (err)=>{
//     console.error(err)
//     insertLast('body',err)
//   }
// )


async function render(){

  await delayP(2000);
  
  let response = await jihoon.get('https://jsonplaceholder.typicode.com/users/1');

  console.log(response.data);
}


render()


