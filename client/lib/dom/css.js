
function addClass(node,className){
  
  if(typeof node === 'string') node = getNode(node);

  if(typeof className !== 'string'){
    typeError('addClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }
  
  node.classList.add(className)

}


// addClass('.first','hello')



// 변경하기 : 대상의 클래스를 지운다.
function removeClass(node,className){
  if(typeof node === 'string') node = getNode(node);

  if(!className){
    node.className = ''
    return;
  }
  
  if(typeof className !== 'string'){
    typeError('removeClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.remove(className)  
}


// removeClass('.first','hello')





function toggleClass(node,className){
  if(typeof node === 'string') node = getNode(node);
  if(typeof className !== 'string'){
    typeError('toggleClass 함수의 두 번째 인자는 문자 타입 이어야 합니다.');
  }

  node.classList.toggle(className)
}

// toggleClass('.first','hello')




/* -------------------------------------------------------------------------- */
/*                         유틸함수 - getCss, setCss, 합친거                         */
/* -------------------------------------------------------------------------- */



// 자바스크립트에선 객체의 key, value 값을 변수로 받기 위해서는 .(쩜) 사용 X -> [ ] 각괄호 표기법 사용하기 
// 대상에게 속성을 받아서 이 속성 값이 뭐야~? 라는 걸 보여줘야함

function getCss(node,prop){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  if(!(prop in document.body.style)){    // 정확한 css 속성인지 확인하기
    SyntaxError('getCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  } 
  return getComputedStyle(node)[prop]
  
}

//let result = getCss('.first', 'font-size');
// console.log( getCss('.first','font-size') );





// 대상에게 원하는 css 속성을 추가 = set
function setCss(node,prop,value){
  if(typeof node === 'string'){
    node = getNode(node);
  }
  if(!(prop in document.body.style)){
    syntaxError('setCSS 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.')
  }
  if(!value){
    syntaxError('setCSS 함수의 세 번째 인자는 필수값 입니다.')
  }
  
  // if(value.replace(/\s+/g,'') === ''){

  // }
  
  node.style[prop] = value;

}
// first.style.color =red;
// setCss('.first','color','red')  // red



//합치기
/* css('.first', 'font-size'); //get
css('.first', 'font-size', '100px'); //set
 */


//단축 하기전
/* function css(node,prop,value) {
  if(!value) 
 */


  //단축 후
const css = (node,prop,value) => { 
  return !value ? getCss(node,prop) : setCss(node,prop,value) 
}