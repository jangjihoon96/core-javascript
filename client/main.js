

/* eslint no-undef: 'warn' */
/* eslint no-unused-vars: 'off' */


// 내가 한 거
// const first = document.querySelector('#firstNumber');
// const second = document.querySelector('#secondNumber');
// const button = document.querySelector('#done');

// function handler(e){
//   e.preventDefault()
//   let result = Number(first.value) + Number(second.value);
//   let output = document.querySelector('.result');
//   first.value = "";
//   second.value = "";
//   return output.textContent = `${result}`
  
// }

// button.addEventListener('click',handler);






// 범쌤이 한 거
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');


function getInputValue(node){
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value
}

const sum = (valueA,valueB) => valueA + valueB;

function clearContents(node){
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e){
  e.preventDefault();
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue);

  console.log(total)

  clearContents(result);

  insertLast(result,total);
  

}



function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue,secondValue);

  console.log(total)

  clearContents(result);

  insertLast(result,total);


}



done.addEventListener('click',handler);

firstInput.addEventListener('change', inputHandler)
secondInput.addEventListener('change', inputHandler)
