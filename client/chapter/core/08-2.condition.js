/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


// let age = parseInt(prompt('나이를 입력하세요.',''),10);

// if(age >= 14 && age <=90){
//   console.log('14세이상 90세이하')
// } else if(age < 14 || age > 90){
//   console.log('어린이거나 나이를 엄청 많이 드셨네요')
// } else{
//   console.log('잘못된 값 입력')
// }

// let ageMessage = (age >= 14 && age <= 90) ? '14세이상 90세이하' : '어린이'

// console.log(ageMessage);







let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false}; // 4개 다 트루이기에 마지막 값이 
// console.log(whichFalsy)

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};
// console.log(whichTruthy)


// let userName = 'Admin';
// let pw = 'TheMaster';

// let userName = prompt('아이디를 입력하세요','');

// if(userName === 'Admin'){
//   let pw = prompt('비밀번호를 입력하세요','');
//   if(pw === 'TheMaster'){
//     alert('로그인된 것을 환영합니다.')
//   } else {
//     alert('잘못된 비밀번호입니다.')
//   }
// } else {
//   alert('잘못된 아이디입니다.');
// }


// let userName = prompt('아이디를 입력하세요', '');
// let pw = prompt('비밀번호를 입력하세요', '');

// if(userName === 'Admin' && pw === 'TheMaster'){
//   alert('로그인 ㅊㅋ');
// } else if(userName !== 'Admin' || pw !== 'TheMaster'){
//   alert('로그인 정보가 다릅니다.');
// } else {
//   alert('ㅋ')
// }


let userName = prompt('아이디를 입력하세요', '');

if(userName === 'Admin'){
  let pw = prompt('비밀번호를 입력하세요', '');

  if(pw === 'TheMaster'){
    console.log('로그인 됐습니다. 환영합니다.');
  }else if(pw === '' || pw === null){
    console.log('취소됐습니다.');
  }else{
    console.log('비밀번호가 틀렸습니다.');
  }

}else if(userName === '' || userName === null){
  console.log('취소됐습니다.');
}else{
  console.log('인증되지 않은 사용자 입니다.');
}
