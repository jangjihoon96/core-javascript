/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */


// let numberInput = prompt('숫자를 입력하세요.','');

// let numberInt = Number(numberInput);

// if(numberInt > 0){
//   console.log(1);
// } else if(numberInt < 0){
//   console.log(-1);
// } else if(numberInt == 0){
//   console.log(0);
// } else {
//   console.log('숫자가 아닌 값을 입력하였습니다.');
// }

// let message = (numberInt > 0) ? '1' : (numberInt < 0) ? '-1' : (numberInt == 0) ? '0' : '숫자가 아닌 값을 입력하였습니다.';

// console.log(message);





// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';


// if 문(statement)

// if(didWatchMovie.includes('yes')){
//   console.log('그거 재밌더라')
// }else if(goingToWatchMovie === 'yes'){
//   console.log('너무 설렌다')
// }else{
//   console.log('아니 난 별로')
// }

let  movieMessage = 
  (didWatchMovie.includes('yes')) ?  '그거 재밌더라' :
  (goingToWatchMovie === 'yes') ?  '너무 설렌다' : '아니 난 별로'

console.log(movieMessage);



// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식