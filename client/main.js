
import { jujeobData } from './data/data.js';
import { clearContents, copy, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert, syntaxError, typeError } from './lib/index.js';



const submit = getNode('#submit');
// const inputValue = getNode('#nameField');
const resultArea = getNode('.result');






function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];
  

  if(!name){
    showAlert('.alert-error','이름을 입력해주세요.',3000);
    return
  }

  if(isNumericString(name)){
    showAlert('.alert-error','제대로된 이름을 입력해주세요.',3000);
    return
  }

  clearContents(resultArea)

  insertLast(resultArea,pick);

  console.log(pick)


}




function clickCopyHandler(){
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text)
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사가 완료됐습니다.',2000);
  }); // 약속구문(promise) 카피가 제대로 완료되었다면 then 뒤에 함수를 실행시켜 주라는 뜻
  
  
}


submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);




