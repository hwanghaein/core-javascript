/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값 null
console.log(null);
// 2. 값이 할당되지 않은 상태 undefined
console.log(undefined);
// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
let message1 = "hello"
let nickname = 'tiger'
// let message3 = `안녕 내이름은 ${nickName}야`;


// 4. 정수, 부동 소수점 숫자(길이 제약)\
// let number = 100.123
// console.log(number)

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
console.log(12913n + 10n);
// 6. 참(true, yes) 또는 거짓(false, no)
console.log(true)
// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
console.log({})
// 8. 고유한 식별자(unique identifier)
console.log(Symbol)


/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류




// Object (객체) 생성자함수 앞에 대문자로 시작
// const user = new Object()
const user = {
  name: 'tiger',
  age:32
}

// Array (배열) 
// let list = new Array()
let list = [10, 100, 1000, 1,2,3]


// function 함수 큰상자만들기 =붕어빵 틀
// a,b는 매개변수 =재료들 parameter
function sum(a,b){

  // return으로 결과 내보내기 =(재료들을 더하면) 00맛 붕어빵입니다
 return a + b
}
 
// 결과 나오게, 인자 (함수에 전달해주는값=반죽이랑 팥) argument
console.log( sum(10,30) );

// this


