
import { getNode } from '../dom/getNode.js';








const first = getNode('.first');


function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = 'rotate(360deg)'
    delay(()=>{
      first.style.top = '0px';
    })
  })
},0)

// first.style.top = '-100px'

// setTimeout(() => {
//   first.style.transform = 'rotate(360deg)'
// }, 1000);

// setTimeout(() => {
//   first.style.top = '0px'
// }, 2000);