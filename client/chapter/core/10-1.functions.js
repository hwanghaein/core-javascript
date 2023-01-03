/* ---------------------------------------------------------------------- */
/* Functions → Declaration                                                */
/* ---------------------------------------------------------------------- */

/* console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900); */

function calcPrice(priceA, priceB, priceC, priceD) {


if(!priceC){ //price C 값이 없다면
  priceC = 0;
}

if(!priceA || !priceB){
  throw new Error('calcPrice 함수의 첫번째와 두번째 인수는 필수 입력값입니다.')
}



return priceA + priceB + priceC + priceD;
}

let result = calcPrice(100,5000,200,450);
console.log(result);




/* 
TODO default 값에 함수를 전달
function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice( // 함수 선언
  priceA, // 매개 변수
  priceB, 
  priceC= getRandomValue(), priceC 값이 없으면 0아니면 1로나옴  // 매개 변수 기본 값
  priceD = getRandomValue() priceD 값이 없으면 0아니면 1로나옴 
  ) 
  {
  return  priceA + priceB +  priceC + priceD; // 함수 값 반환
} */




/* let result = calcPrice(10,30) // 함수 호출

console.log(result);
 */



// 매개 변수 vs. 전달 인자

// 외부(전역 포함), 지역 변수



// 좋은 함수 작성 여건
// 1. 하나의 기능만을 수행해야 한다.  (관심사의 분리)
// 2. 읽었을때 바로 기능을 알 수 있게끔, (이름과 매개변수의 이름을 직관적이게 적어야 한다.)
// 3. 재사용성이 좋아야 한다.


/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
function rem(pxValue, base){

  if(typeof pxValue === 'string'){
    pxValue = parseInt(pxValue,10)
  }

  return `${pxValue / base}rem`

}


console.log(rem('20px',16));

/* console.assert(rem(20) === '1.25rem');
console.assert(rem('30px') === '1.875rem');
console.assert(rem('56px', 10) === '5.6rem');
 */

rem(20) // '1.25rem'
rem('30px') // '1.875rem'
rem('56px', 10) // '5.6rem'




/* // rem(pxValue: number|string, base: number):string;
function rem(pxValue, base = 16){

  typeof pxValue === 'string' &&  (pxValue = parseInt(pxValue,10))

  // if(typeof pxValue === 'string'){
  //   pxValue = parseInt(pxValue,10)
  // }

  typeof base === 'string' && (base = parseInt(base,10))

  // if(typeof base === 'string'){
  //   base = parseInt(base,10)
  // }

  return `${pxValue / base}rem`
} */



/* 
  1. function name
  2. validation
  3. return value
  4. parameter, argument
  5. test  [Test Driven Development]
*/







// css(node: string, prop: string, value: number|strung) : string;
let css;





// node의 값을 'h1'으로 받았을 경우 

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 sytle 속성이 아닐 경우 

// value의 값이 number가 아닌 경우 



// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.