// TypeAnnotation = :boolean
let isDone: boolean = false;

isDone = true;

console.log(typeof isDone); // 'boolean'

// npx tsc : ts 환경에 맞춰 컴파일 -> boolean.js 파일 생성된다
// node boolean.js -> 결과 = boolean

// VS 대문자 (직접 literal 값으로 primitive type 사용)
let isOk: Boolean = true;
// let isNotOk: boolean = new Boolean(true); // 위 코드처럼 사용