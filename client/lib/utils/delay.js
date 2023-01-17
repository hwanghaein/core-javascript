import {
  getNode
} from '../dom/getNode.js';


const first = getNode('.first');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

delay(() => {
  first.style.top = '-100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    delay(() => {
      first.style.top = '0px';
    })
  })
})


// first.style.transform ='rotate(360deg)';
// first.style.top ='0px';
//한번에 실행됨
//동시에 움직이기 싫어서 콜백함수 쓰기 (올라갔다가 돌고 내려오게하기)