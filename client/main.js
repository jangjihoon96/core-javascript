/* global gsap */


import { insertLast, xhrData, xhrPromise, jihoon, delayP, getNode, renderUserCard, changeColor, renderSpinner } from "./lib/index.js";


// xhrData 사용해보기 {#fff}
// xhrData.get(
//   'https://jsonplaceholder.typicode.com/users/1',
//   (result)=>{
//     console.log(result)
//     insertLast('body',JSON.stringify(result))
//     // insertLast('body',JSON.stringify(result.name))
//   },
//   (err)=>{
//     console.error(err)
//     insertLast('body',err)
//   }
// )

// fetch 사용해보기 {#fff}
// async function render(){
//   await delayP(2000);
//   let response = await jihoon.get('https://jsonplaceholder.typicode.com/users/1');
//   console.log(response.data);
// }
// render()










/******************* 유저 리스트 카드 만들기 {#fff} *******************/


// rendingUserList 함수
// ajax get user List

// 유저 카드 생성
// 생성된 카드로 렌더링

const userCardContainer = getNode('.user-card-inner');

async function rendingUserList(){

  renderSpinner(userCardContainer)

  try{

    await delayP(2000);
    getNode('.loadingSpinner').remove();
    let response = await jihoon.get('https://jsonplaceholder.typicode.com/users');
    
    let userData = response.data;
  
    userData.forEach(data => renderUserCard(userCardContainer,data));

  } catch (err) {
    console.log(err)
  }
  
  

  

  // console.log(userData);

  // renderUserCard(userCardContainer,response);
  // insertLast(userCardContainer,createUserCard(userData));
  
  
  // console.log(gsap.utils.toArray('.user-card'));
  changeColor('.user-card');
  gsap.to([gsap.utils.toArray('.user-card')],{
    // rotate:'360deg', 
    x:0,
    opacity:1,
    duration:1.5,
    stagger: 0.2,
  })
  
}
rendingUserList();





