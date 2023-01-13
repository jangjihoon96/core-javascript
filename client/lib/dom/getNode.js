/* 노드 엘리먼트 찾는 함수 */
export function getNode(node){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.')
  }
  return document.querySelector(node);
}

/* 노드 엘리먼트 모두를 찾는 함수 */
export function getNodes(node){
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입이어야 합니다.')
  }
  return document.querySelectorAll(node);
}