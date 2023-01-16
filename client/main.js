import { attr, clearContents, diceAnimation, disableElement, enableElement, getNode, getNodes, insertLast, invisibleElement, memo, visibleElement } from "./lib/index.js";


// [ 주사위 굴리기 ] {#fff}
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기

// [ 레코드 리스트 보이기 ] {#fff}
// 1. handleRecord 함수를 만들기
// 2. disable 활성 유틸 함수 만들기
// 3. handleReset 함수를 만듭니다.
// 4. visible 활성 유틸 함수 만들기
// 5. toggleState 유틸 함수 만들기 

// [ 레코드 템플릿 뿌리기 ] {#fff}
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

// [ 초기화 시키기 ] {#fff}
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화 
// 3. 스크롤 밑으로 보내기 
// 4. 메모이제이션 패턴 




// 배열의 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

memo('@tbody',() => getNode('.recordListWrapper tbody'));


// const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');
// const recordButton = getNode('.buttonGroup > button:nth-child(2)');
// const resetButton = getNode('.buttonGroup > button:nth-child(3)');




/****** render {#fff} ******/ 

let counter = 0;
let total = 0;
function renderRecordListItem(){
  // let item = recordListWrapper.querySelector('tbody');
  let diceValue = Number(attr('#cube','data-dice'));
  let template = /* html */`
    <tr>
      <td>${++counter}</td>
      <td>${diceValue}</td>
      <td>${total += total + diceValue}</td>
    </tr>
  `
  insertLast(memo('@tbody'),template);
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
}




/****** event {#fff} ******/

// IIFE
const handleRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation, 100);
      // recordButton.disabled = true;
      disableElement(recordButton)
      disableElement(resetButton)
      // isRolling = true;
    } else {
      clearInterval(stopAnimation);
      // recordButton.disabled = false;
      enableElement(recordButton);
      enableElement(resetButton);
      // isRolling = false;
    }
    isRolling = !isRolling;
  }

})()


const handleRecord = () => {
  
  visibleElement(recordListWrapper);

  renderRecordListItem();

}

const handleReset = () => {
  counter = 0;
  total = 0;
  invisibleElement(recordListWrapper);
  clearContents(memo('@tbody'));
}

rollingDiceButton.addEventListener('click',handleRollingDice)
recordButton.addEventListener('click',handleRecord)
resetButton.addEventListener('click',handleReset)

