/* ---------------------------------------------------------------------- */
/* Nullish Coalescing Operator                                            */
/* ---------------------------------------------------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.
receivedEmailAddress = (emailAddress === undefined || emailAddress === null) ? 
'user@company.io' : emailAddress

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.
receivedEmailAddress = 'user@company.io' ?? emailAddress

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환


const WIDTH = '10px' 

// 넷 다 10px 나옴

console.log( null || WIDTH); 
console.log( null ?? WIDTH);

console.log( undefined || WIDTH);
console.log( undefined  || WIDTH);

// 각각 10px, false(정의된 값) 나옴
console.log( false || WIDTH);
console.log( false  ?? WIDTH);

// 눌리쉬는 사용자가 값을 넣었다고 생각되면 나옴 (눌리쉬는 undefined랑 null 아닌것들은 다 뱉는거임
// 정의된 값을 만나면 뒤까지 안 가고 그 값이 나와요!