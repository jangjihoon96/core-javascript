/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');

visual.addEventListener('click', (e) => {
  // this로도 찾을 수 있지만, 만약 화살표 함수라면? this가 상위객체를 찾게 됨. 따라서 e.currentTarget 사용
  // console.log('e.target : ',e.target);
  // console.log('e.currentTarget : ',e.currentTarget);
  // console.log(this === e.currentTarget);
  // console.log(this);
  console.log('%c visual','background:dodgerblue;color:#fff')
  css('.pop','display','block');
});


getNode('.pop').addEventListener('click', (e) => {
  e.stopPropagation();
  css('.pop','display','none');
});



// news.addEventListener('click', function(){
//   console.log('%c news','background:orange;color:#fff')
// });


// desc.addEventListener('click', function(e){
//   e.stopPropagation()
//   console.log('%c desc','background:hotpink;color:#fff')
// });




/* 캡처링 ----------------------------------------------------------------- */