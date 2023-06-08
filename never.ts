/**
 * never
 * - return에 사용
 * - 모든 타입의 subtype, 모든 타입에 할당 가능
 * - 하지만, never에는 그 어떤 것도 할당할 수 없다.
 * - any 조차도 never에게 할당 불가
 * - 잘못된 타입을 넣는 실수를 막고자 사용하기도 한다.
 */

// never = 아무것도 retrun하지 않는다.
// Body부에 throw
function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}


// a = never
// let a: string = "hello";

// if (typeof a !== 'string' ) {
//   a;
// }

// TypeGuard
// a= number
declare const a: string | number;

if (typeof a !== "string") {
  a;
}

// 조건부 타입
// T가 만약 string이면 T & { [index: string]: any } 이렇게 만들어서 보내고
// 아니면, never
type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

// {}에 잘못된 타입을 넣으면 never
type ObjectIndexable = Indexable<{}>;