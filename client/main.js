


/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */



// 1. 인풋 벨류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기 
// 5. 화면에 출력하기



const firstInput = getNode('#firstNumber'); // 1
const secondInput = getNode('#secondNumber'); // 6
const done = getNode('#done');  // 1
const result = getNode('.result'); // 11  //14


function getInputValue(node){ // 4
  if(typeof node === 'string') node = getNode(node);
  if(node.tagName !== 'INPUT') refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.')
  return node.value
}


// const sum = (valueA,valueB) => valueA + valueB;

function sum(valueA,valueB){ // 9
  return valueA + valueB;
}


function clearContents(node){ // 12
  if(typeof node === 'string') node = getNode(node);
  node.textContent = '';
}


function handler(e){ 
  e.preventDefault(); // 3

  let firstValue = +getInputValue(firstInput); // 4 // 5  // 7
  let secondValue = +getInputValue(secondInput); // 6  // 7 
  let total = sum(firstValue, secondValue) // 8


  
  clearContents(result); // 13

  insertLast(result,total);
  
}



function inputHandler(){ // 9
  let firstValue = +getInputValue(firstInput); 
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue) 


  
  clearContents(result); // 13 // 14

  insertLast(result,total); // 10
}



done.addEventListener('click',handler) // 2

firstInput.addEventListener('change',inputHandler) // 15
secondInput.addEventListener('change',inputHandler) // 15



















