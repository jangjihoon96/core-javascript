/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */


/* {#fff} 
문 : 값을 반환 x
if문 if ... { scope 생성 }
for문 for ... {}
while문 while {}
dowhile문 {}
함수선언 문 {}

식 : 값을 반환 o
let result = condition ? value1 : value2 
*/










// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 좋은 함수란, {#fff}
// 1. 하나의 기능만을 console.error('수행해야한다',수행해야한다)
// 2. 읽었을 때 바로 알 수 있는 직관적인 네이밍
// 3. 재사용성이 좋아야 한다.

// default parameter

function getRandomValue(){
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice( // 함수 선언
  priceA, // 매개 변수
  priceB,
  priceC = getRandomValue(), // 매개 변수 기본 값
  priceD = 0 // 매개 변수 기본 값
){
  // a와 b를 더하는게 아니라면 더하는 함수에 의미가 없어지기 떄문에
  if(!priceA || !priceB){
    throw new Error('calcPrice 함수의 첫 번째와 두 번째 인수는 필수 입력값 입니다.')
  }
  return priceA + priceB + priceC + priceD; // 함수 값 반환
}
let result = calcPrice(100,5023); // 함수 호출
console.log(result);

// function calcPrice(priceA, priceB, priceC, priceD){
//   if(!priceD){
//     priceD = 0;
//   }
//   return priceA + priceB + priceC + priceD;
// }
// let result = calcPrice(100,5023,234,5231);
// console.log(result);










// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수

// 좋은 함수 작성 여건


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// 이건 타입스크립트 문법
// rem(pxValue: number|string, base: number):string;
// let rem;

// 내가 짠 코드
// function rem(pxValue, base = 16){
//   if(base === 16){
//     return (parseInt(pxValue,10) / base + 'rem');
//   } else {
//     return (parseInt(pxValue,10) / parseInt(base,10) + 'rem');
//   }
// }

// 범쌤이 짠 코드
function rem(pxValue, base = 16){
  typeof pxValue === 'string' && (pxValue = parseInt(pxValue,10));
  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10)
  // }
  typeof base === 'string' && (base = parseInt(base,10));
  // if(typeof base === 'string'){
  //   base = parseInt(base,10)
  // }
  return `${pxValue / base}rem`
}

// assert 는 테스팅 임. 기대값이 내가 짠 코드와 일치하면 콘솔에 아무것도 안나오게 됨 (정상)
console.assert(rem(20) === '1.25rem');
console.assert(rem('30px') === '1.875rem');
console.assert(rem('56px',10) === '5.6rem');
console.assert(rem('56px','10px') === '5.6rem');



/* {#fff}
  함수가 만들어지는 과정
  1. function name
  2. validation
  3. return value
  4. parameter, argument
  5. test [Test Driven Development]
*/







// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.