/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

let key= 'creator'

console.log(key in javaScript);
// key(creator)가 javaScript 안에 있냐? true




// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?


// 객체 자신(own)의 속성([property)인지 확인하는 방법 (hasOwnProperty) 조상꺼까지 안찾고 딱 내가 갖고있는것만 찾아줌 근데 자바스크립트 자체에서 이 함수를 보호해주지않음. 
// console.log(javaScript.hasOwnProperty(key));

// console.log(Object.prototype.hasOwnProperty.call(javaScript,key));
// 찐 오브젝트가 가진 능력중에 hasOwnProperty(함수)를 사용하겠다. 빌려써야함.call
for(let key in javaScript){

  if(Object.prototype.hasOwnProperty.call(javaScript,key)){
  console.log(key);
}
}
/* 지금까지 이야기한 요약본

for~in문에서 객체 안의 대상을 파악하면 조상까지 올라가서 문제 생겨서 해결법은?
객체 자신의(own) 속성(property)인지 확인(has)하는 방법 : hasownproperty
그런데 hasownproperty가 함수 자체를 보호해주지않아 오염될 변질이 생겨서 해결법은?
Object.prototype.hasOwnProperty.call(javaScript,key)
 */

// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?


let tens = [10,100,1000,10000];


for(let value in tens){
  if( ({}).hasOwnProperty.call(tens,value)){
    console.log(tens[value]);
  }
}