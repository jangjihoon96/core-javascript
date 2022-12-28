/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2022;
console.log(String(YEAR));

// undefined
console.log(String(undefined));

// null
let days = null;
console.log(String(days));

// boolean
let isKind = false;
console.log(String(isKind));
console.log(true + '');


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined{#1e283f}
console.log(Number(undefined));

// null{#1e283f}
let money = false;
console.log(Number(money));

// boolean{#1e283f}
let cutie = true;
let ugly = false;
console.log(cutie * 1);
// console.log(cutie / 1);
// console.log(+cutie);
// console.log(Number(cutie));
console.log(Number(ugly));

// string{#1e283f}
let num = '   123' // 숫자인 문자형은 안에 공백을 제거하고 숫자형으로 반환된다.
console.log(num * 1);
// console.log(num / 1);
// console.log(+num);

// numeric string{#1e283f}
let width = '320px';
// let widthNum = parseInt(width,10);
// console.log(widthNum);
console.log(parseInt(width,10)); // 10을 붙이는 이유는 10진수로 표기한다는 뜻이다.
let height = '15.2313px';
console.log(parseFloat(height,10)); // 소수점까지 표현


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''  
// 위에 나열한 것 이외의 것들
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
// console.log(Boolean(!!'')); // 2번 부정을 통해 false; 
// console.log(Boolean(!'')); // 부정을 하는 ! 가 붙었기에 true 
// console.log(Boolean('0')); // 문자형 0은 true;
// console.log(Boolean(' ')); // 공백이 있으면 true;