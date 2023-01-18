
import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';









const first = getNode('.first');


function delay(callback,timeout = 1000){
  setTimeout(callback,timeout);
}

// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)'
//     delay(()=>{
//       first.style.top = '0px';
//     })
//   })
// });

// delayP()
// .then(()=>{
//   first.style.top = '-100px';
//   return delayP();
// })
// .then(()=>{
//   first.style.transform = 'rotate(360deg)';
//   return delayP();
// })
// .then*(()=>{
//   first.style.top = '0px';
//   return delayP();
// })


const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공했습니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

export function delayP(options = {}){

  let config = {...defaultOptions};

  // options에 숫자만 들어갔을경우 timeout 변경
  if(isNumber(options)){
    config.timeout = options;
  }

  // options이 객체가 맞을때 config와 객체 합성 mixin
  if(isObject(options)){
    config = {...config, ...options}  
  }

  let {shouldReject,timeout,data,errorMessage} = config;

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      !shouldReject ? resolve(data) : reject(errorMessage);
    }, timeout);

  })

}

// delayP() // promise

// delayP(3000).then((res)=>{
//   console.log(res)
// })

// delayP({
//   data:'성공입니다~~'
// }).then((res)=>{
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



// delayP().then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err)
// })