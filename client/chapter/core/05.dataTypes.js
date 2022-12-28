/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
console.log(typeof null);

// 2. 값이 할당되지 않은 상태
console.log(typeof undefined);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
console.log(typeof String);
let message1 = "hello"
let message2 = 'hello'
let nickName = 'Hoon';
let message3 = `안녕 내 별명은 ${nickName} 이야`;
console.log(message3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
console.log(typeof Number);
let number1 = 100;
let number2 = 123.2313124;
console.log(number2);
console.log('number : ',typeof number1);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(typeof BigInt);
// 빅인트는 빅인트끼리만 계산가능
// console.log(123n + 10);
console.log(123n + 10n);

// 6. 참(true, yes) 또는 거짓(false, no)
console.log(typeof true);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log(typeof {});

// 8. 고유한 식별자(unique identifier)
// Symbol('uid');
console.log(typeof Symbol('uid'));

console.log(typeof Math);

const fuc = function (){

}
console.log(typeof fuc);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object{#1e283f}
// 객체 리터럴 방식 (바로 사용한다는 뜻)
const user = {
 name: 'hoon', //프로퍼티
 age: 27, //프로퍼티
 fish: function(){ //메소드
  return "뻐끔뻐끔"
 }
}
// const user = new Object();
// user.name = 'hoon';
// user.age = 27;
console.log(user);
console.log(user.fish());

// Array{#1e283f}
// 배열 리터럴 방식 (바로 사용한다는 뜻)
let list = [10,100,1000,1,2,3];
// let list = new Array();
// list[0] = 10;
// list[1] = 100;
// list[2] = 1000;
console.log(list)

// function 함수{#1e283f}
function sum(a,b){
  return a + b
}
console.log(sum(10,20));
// 함수에 관련된 예제
// function 붕어빵틀(data){
//   return `${data} 맛 붕어빵 입니다.`
// }
// 붕어빵틀('팥');


// this


