/* ---------------------------------------------------------------------- */
/* Event bubbling & capturing                                             */
/* ---------------------------------------------------------------------- */


/* 버블링 ----------------------------------------------------------------- */


const visual = getNode('.visual');
const news = getNode('.news');
const desc = getNode('.desc');


/* -------------------------------------------------------------------------- */
/*                                     기본                                     */
/* -------------------------------------------------------------------------- */

/* visual.addEventListener('click', function(){
  console.log('%c visual','background:dodgerblue');
})

news.addEventListener('click', function(){
  console.log('%c news','background:orange');
})

desc.addEventListener('click', function(e){
  e.stopPropagation()
  console.log('%c desc','background:hotpink');
}) */



/* -------------------------------------------------------------------------- */
/*                                   화살표 함수                               */
/* -------------------------------------------------------------------------- */


visual.addEventListener('click',(e) => {
  let elem = e.currentTarget;
    // console.log('target : ',e.target);
    // console.log('currentTarget :  ' ,e.currentTarget);
    // console.log(this === e.currentTarget);
    // console.log(this);
    console.log('%c visual','background:dodgerblue');

    css('.pop','display','block');
})



getNode('.pop').addEventListener('click',(e)=>{
  e.stopPropagation()
  css('.pop','display','none');
})


/* -------------------------------------------------------------------------- */
/*                            target, currentTarget                           */
/* -------------------------------------------------------------------------- */


// target : 마우스가 처음 만나는 대상(직접적으로 클릭한 대상)
//currentTarget : 이벤트가 걸린 대상(직접 클릭한 대상이 아닌 이벤트가 걸린 대상)

/* visual.addEventListener('click', function(e){
  console.log('target : ',e.target);
  console.log('currentTarget : ',e.currentTarget);
  console.log('%c visual','background:dodgerblue');
}) */



/* -------------------------------------------------------------------------- */
/*                                    this                                    */
/* -------------------------------------------------------------------------- */

// this = visual = currenttarget  다 같은 애

/* visual.addEventListener('click', function(e){
console.log(this);
console.log('%c visual','background:dodgerblue');
})
 */


/* 캡처링 ----------------------------------------------------------------- */