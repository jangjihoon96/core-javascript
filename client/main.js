
import { jujeobData } from './data/data.js';
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert, syntaxError, typeError } from './lib/index.js';



const submit = getNode('#submit');
// const inputValue = getNode('#nameField');
const resultArea = getNode('.result');






function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];
  

  if(!name){
    showAlert('.alert','이름을 입력해주세요.',3000);
    return
  }

  if(isNumericString(name)){
    showAlert('.alert','제대로된 이름을 입력해주세요.',3000);
    return
  }

  clearContents(resultArea)

  insertLast(resultArea,pick);

  console.log(pick)


}


function mouseClickPasty(e){
  return resultArea.textContent.execCommand('copy');
}


submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', mouseClickPasty);




