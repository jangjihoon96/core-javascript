/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: "fixed",
  zIndex: 10000,
  top: "50%",
  left: "50%",
  width: "60vw",
  maxWidth: 800,
  height: "40vh",
  minHeight: 280,
  transform: "translate(-50%, -50%)",
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)


// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

// authentication = 인증
// authorization = 권한
let authUser = null;

authUser = {
  id: 'user-id-erafa',
  name: 'JiHoon',
  email: 'jihoon12@gmail.com',
  isSignIn: true,
  permission: 'paid', // free | paid
}



// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
// console.log(authUser.id);
// console.log(authUser.name);
// console.log(authUser.email);
// console.log(authUser.isSignIn);
// console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
// console.log(authUser['id']);
// console.log(authUser['name']);
// console.log(authUser['email']);
// console.log(authUser['isSignIn']);
// console.log(authUser['permission']);


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty){
  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-7155-2322'
  }
}

const user = createUser();


// 프로퍼티 포함 여부 확인
Object.prototype.SiGN = true;

for(let key in authUser){
  // if(Object.prototype.hasOwnProperty.call(authUser,key)){
  if(({}).hasOwnProperty.call(authUser,key)){
    // console.log(key);
  }
}



// 프로퍼티 나열 authUser : 객체      배열 만들어주세요.
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

// console.log(valueArray)



// function getPropertiesList(object){
//   return Object.keys(object);
// }

const getPropertiesList = object => Object.keys(object);

// function getPropertiesList(object){
//   let result = [];
//   for(let key in object){
//     if(({}).hasOwnProperty.call(authUser,key)){
//       result.push(key)
//     }
//   }
//   return result;
// }

let result = getPropertiesList(authUser);




      // remove or delete
// 프로퍼티 제거 or 삭제 
// authUser['id'] = null // 제거

// 유틸 함수를 만들 수 있을 것 같은데 ...?

// 1. 함수 이름 정하기
// 2. 인수(arguments)와 인자(parameter) 정하기
// 3. 확인하기 (validation)
// 4. 리턴값 (return)

// 제거 함수
function removeProperty(object,key){
  object[key] = null;
}
removeProperty(authUser,'email');

// 삭제 함수
function deleteProperty(object,key){
  delete object[key]
}
deleteProperty(authUser,'id')



// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// shorthand property
const student = { name, email, authorization, isLogin }


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
// 객체의 키를 배열로 바꾸고 그 배열의 갯수가 0 이면 ? true : false
function isEmptyObject(object) {

  // if(Object.keys(object).length){
  //   return false
  // } else {
  //   return true
  // }
  // return Object.keys(object).length === 0 ? true : false;
  return Object.keys(object).length === 0;
  
}

const empty = {}

isEmptyObject(empty);


let salaries = {
  John: 100,
  Ann: 160,
  Pete: 430 // 멋쟁이 사자처럼 출신의 프론트앤드 개발자
}

// 월급의 총 합을 구하세요.

/* 배열 구조 분해 할당 destructuring assignments */
let total = 0;
for(let [key, value] of Object.entries(salaries)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  total += value;
}
// console.log(total);


let color = ['#ff0000','#2b00ff','#00ff2f'];
// const COLOR_RED = color[0];
// const COLOR_BLUE = color[1];
// const COLOR_GREEN = color[2];
// 위에랑 아래가 같다.
// const [COLOR_RED, COLOR_BLUE, COLOR_GREEN] = color;

// 발췌
const [ , , COLOR_GREEN] = color

console.log(COLOR_GREEN);



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 430 // 멋쟁이 사자처럼 출신의 프론트앤드 개발자
// }

/* 객체 구조 분해 할당 */
const { John, Ann, Pete } = salaries;

const element = {
  width: 500,
  height: 600
}

function getElementWidth(option, node){
  const { width, height } = element;
  width
}

console.log(John)