

import { insertLast, xhrData } from "./lib/index.js";



xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (result)=>{
    console.log(result)
    insertLast('body',JSON.stringify(result))
    // insertLast('body',JSON.stringify(result.name))
  },
  (err)=>{
    console.error(err)
    insertLast('body',err)
  }
)





