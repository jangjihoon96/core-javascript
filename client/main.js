import { diceAnimation, getNode } from "./lib/index.js";


// [ 주사위 굴리기 ] {#fff}
// 1. dice 애니메이션 불러오기
// 2. bindEvent 유틸함수 만들기
// 3. handlerRollingDice 함수 만들고 토글로 애니메이션 제어하기
// 4. 변수 보호를 위한 클로저 + IIFE 사용하기


const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)');


// IIFE

const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;

  return () => {
    if(!isRolling){
      stopAnimation = setInterval(diceAnimation, 100);
      // isRolling = true;
    } else {
      clearInterval(stopAnimation);
      // isRolling = false;
    }
    isRolling = !isRolling;
  }
  
})()


rollingDiceButton.addEventListener('click',handlerRollingDice)

