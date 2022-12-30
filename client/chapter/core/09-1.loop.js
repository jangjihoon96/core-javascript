/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */



// let i = 0;
// while(i < 5){
//   console.log(i++);
// }






const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);

// let i = 0;
// while(i < frontEndDev.length){

//   let value = frontEndDev[i];
//   console.log(value);
//   // console.log(frontEndDev[i]);
//   i++;
// }


// let i = frontEndDev.length - 1;
// while(i >= 0){
//   console.log(i, frontEndDev[i]);
//   i--;
// }

//전개 연산자 전개 구문 spread oparator
// let copyArray = [...frontEndDev]; // 기존 원본 배열을 pop,shift 사용했을때 파괴되지 않기위해 복사 해서 사용함
let copyArray = frontEndDev.slice(); // 자르는 역할인데 몇번째인지 부여를 안했기 때문에 전체를 자름
console.log(copyArray);

while(copyArray.length){
  console.log(copyArray.pop()); // 역순환
  // console.log(copyArray.shift()); // 선순환
}
console.log(copyArray);






/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)


// while 문 (역순환 : 역방향)

// 성능 진단 : 순환 vs. 역순환