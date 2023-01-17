
/* 
  readyState
  0: uninitalized // 초기화
  1: loading // 로딩
  2: loaded // 로딩이 완료된
  3: interactive // 인터렉티브
  4: complete // 완료
*/



function xhrData(method,url,body){

  const xhr = new XMLHttpRequest();

  xhr.open(method,url);

  
  

  xhr.addEventListener('readystatechange', () => {

    // 객체 구조분해 할당
    const {status,readyState,response} = xhr;
    
    // console.log(xhr.readyState)
    // console.log(xhr.status)
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log('통신 성공');
        console.log(JSON.parse(response))
      }
    } else {
      console.error('통신 실패');
    }
  });

  xhr.send(JSON.stringify(body));

}




// 비동기 통신 오픈
xhrData('POST','https://jsonplaceholder.typicode.com/users',{
  // post 통신은 새롭게 생성하는 것, 즉 id값을 넣지않음 (들어가면 생성됨)
  // "id": 1,
  "name": "Jihoon",
  "username": "jangjihoon",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "010-0000-0000",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
});



// 서버에 요청 보내기































