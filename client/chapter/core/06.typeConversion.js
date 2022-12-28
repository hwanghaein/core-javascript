/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;

// console.log(YEAR);
console.log(String(YEAR));


// undefined
// console.log(undefined);
console.log(String(undefined));


// null
let days = null;
console.log(String(days));


// boolean
let isKind = true;
console.log(String(isKind));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undeinfed ->NaN
console.log(Number(undefined));

// null ->0
let money = null;
console.log(Number(money));

// boolean -> true:1 / false:0
let cutie = true;
console.log(cutie * 1);

let pretty = false;
console.log(pretty / 1);


// string 
let num ='123'
console.log(num*1);



// numeric string
let width ='320px'
console.log(width);
console.log(parseInt(width,10))

/* let width ='32.123px'
console.log(parseFloat(width,10)) */


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(undefined));
console.log(Boolean(""));