/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
/* ---------------------------------------------------------------------- */


// let i = 10;
// do{
//   console.log('최초 선언')
//   i++
// }while(i < 5);









// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단




// let count = prompt('몇 번 순환할까요?','');

// do{
//   console.log(count);
//   count--;
// }while(count > 0);

// do{
//   console.log(count);
//   if(count <= 0 || !count){
//     console.log('최초실행');
//     break;
//   }
//   count--;
  
// }while(count);








// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

// 블록 스코프
// {
//   let x =1;
// }
//console.log(x) // 중괄호안에 있는 블록 스코프 let은 밖에서 읽을 수 없다.






let first = document.querySelector('.first');
let second = document.querySelector('.second');

function next(node){
  
  do{
    node = node.nextSibling;
  }while(node.nodeType !== document.ELEMENT_NODE)
  
  return node

}

// next(first) // second
// prev(second) // first

function prev(node){
  
  do{
    node = node.previousSibling;
  }while(node.nodeType !== document.ELEMENT_NODE)
  
  return node

}






//console.log(first.nextSibling); // 너 다음형제가 누구냐는 뜻 (.second가 아닌 사이에 있는 공백 문자를 의미)

//console.log(first.nextSibling.nextSibling); // 공백 문자 다음의 형제를 찾아냄(.second 발견)






