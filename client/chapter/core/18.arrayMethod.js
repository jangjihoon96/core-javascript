/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]
console.log(Array.isArray(arr));
console.log(arr)
// 제대로 자료형 찾아내는 방법
// 1. Object 능력중 toString 을 사용해 자료형 구분 (toString 문자로 반환해주는 역할)
// 2. call로 Object 능력 빌려오기
// 3. slice로 자료형으로 된 문자만 잘라주기 (8번째 단어부터 마지막에서 앞에 단어까지)
// 4. toLowerCase 사용하여 소문자로 변경
// Object.prototype.toString.call([]).slice(8,-1).toLowerCase()
// 유틸함수
function isArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array'
}
function isNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null'
}
console.log(Array.isArray([]))

/* 요소 순환 -------------------------------------------------------------- */
// forEach 는 연산만 해주고 반환은 안함 (map 과의 차이)
// forEach
const user = {}
arr.forEach(function(item,index){
  this[index] = item
},user)
// console.log(user)

const span = document.querySelectorAll('span');
// console.log(span)
span.forEach((item)=>{
  item.addEventListener('click',function(){
    console.log(this)
  })
})

/* 원형 파괴 -------------------------------------------------------------- */
// 원본 arr 배열 콘솔
console.log('원본',arr);
// push 뒤에 추가
// pop 뒤에 삭제
// unshift 앞에 추가
// shift 앞에 삭제
// reverse
// arr.reverse()
// console.log(arr)

// splice
arr.splice(1,0,23,5); // 첫번째 요소를 시작으로 제거하지않고(0) 23과 5를 배열에 추가
// console.log(arr);

// sort 정렬
// a - b 이유
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
arr.sort((a,b)=>{
  return a - b // 오름차순
  // return b - a // 내림차순
})
console.log(arr);

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat 배열 추가
// slice 배열 범위까지 자르기 인자를 안주면 전부 다 자름 (자른건 반환되어 튀어나옴)
// map : forEach와는 다르게 값을 반환함(return 잇어야함) // 따로따로 계산 가능
// forEach => 함수 여러 번 돌리기 / map => 함수 돌려서 배열 만들기
let todo = ['밥먹기','미용실가기','코딩공부하기'];
let template = todo.map((todoList)=>{
  // return '<li>'+todoList+'</li>'
  return `<li>${todoList}</li>`;
});
template.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
});
// console.log(template);


let newArray = arr.map( item => item * 2 )
// console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf 배열값의 위치 찾아줌 (없을경우 -1 반환)
console.log(arr.indexOf(23));

// lastIndexOf
// includes 배열에 특정 값을 찾아줘서 불린형으로 반환해줌
console.log(arr.includes(1));

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

// find : 대상을 하나만 찾음!
const find = users.find((item,index)=>{
  // return item.id === 3;
  return item.id < 3;
});
// console.log(find);

// findIndex
const findIndex = users.findIndex((item,index)=>{
  return item.id === 3;
})
console.log(findIndex)

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter : find랑 다르게 찾아진 모든 요소들을 배열로 넣어서 반환
const filter = arr.filter((number)=>{
  return number < 100;
});
console.log(filter);

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

// reduce
let age = friends.reduce((acc,cur)=>{
  return acc + cur.age
},0);

let template2 = todo.reduce((acc,cur,index)=>{
  return acc + `<li>할일${index + 1} : ${cur}의 값</li>`
},'');

console.log(template2);
console.log(age)

// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

let str = '성찬 보경 일범 세민 형진 주현';

// split : 문자를 배열로 반환
let nameArray = str.split(' ');
console.log(nameArray);

// join : 배열을 문자로 반환
let nameString = nameArray.join('/');
console.log(nameString);