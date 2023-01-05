/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan?.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.





setTimeout(()=>{
  console.log('Hi~~')
}, 1000); // 1000ms


// 옵셔널 체이닝이 사용되는 예시)
// 버튼이 생성 되기도 전에 클릭이벤트가 발생하여 원래는 에러가 떠야하는데 옵셔널 체이닝을 넣음으로서 오류를 막아주었다. 이를 사용하면 기존의 버튼들에게는 이벤트를 실행시킬 수 있고, 나중에 생성되는 버튼에게는 이벤트 실행을 막는 역할을 해줄 수 있는 것이다.
setTimeout(() => {
  const button = /* html */ `
  <button type="button">click me!</button>
  `;
  document.body.insertAdjacentHTML("beforeend", button);
}, 3000);

document.querySelector("button")?.addEventListener("click", function () {
  console.log("hit");
});


// setInterval(() => {
//   console.log('난 인터벌이야')
// }, 3000);























