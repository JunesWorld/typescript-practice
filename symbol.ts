/**
 * ECMAScript 2015의 Symbol
 * new Symbol로 사용할 수 없다.
 * Symbol을 함수로 사용해서 symbol 타입을 만들수 있다.
 * 
 * Primitive Type의 값을 담아서 사용
 * 고유하고 수정불가능한 값으로 만들어준다.
 * 그래서 주로 접근을 제어하는데 쓰는 경우가 많다.
 * 
 * 함수로 사용 = Symbol
 * Type으로 사용 = symbol
 */

// Symbol을 사용할 수 있도록 환경조성 -> tsconfig.json -> lib 수정
console.log(Symbol('foo'));

// 고유한 형태의 값
const sym = Symbol();

const obj = {
  [sym]: "value"
};

// obj["sym"] // 접근불가
obj[sym]