/**
 * Undefined & Null
 * 1. TypeScript에서, undefined는 undefined / null은 null이라는 값만 가질 수 있다.
 * 2. 둘 다 소문자만 존재한다. 
 */

// 이 변수에 할당할 수 있는 것들은 거의 없다.
let u: undefined = undefined;
let n: null = null;

/**
 * undefined & null are subtypes of all other types.
 * 1. tsconfig 설정을 하지 않으면 그렇다.
 * 2. 이것은 number에 null or undefined를 할당할 수 있다 -> 문제가 된다.
 * 3. 하지만 tsconfig 옵션에서 `--strictNullChecks` 사용하면, null & undefined는 void나 자기 자신에게만 할당할 수 있다
 * |- 하위타입으로 존재하지 X(number에 null -> error)
 * |- 이 경우, number에 null & undefined를 사용할 수 없으면 불편하기 때문에
 * |- null과 undefined를 할당할 수 있게하려면 union type을 이용
 */

// Error! -> strictNullChecks가 켜져있다.
// tsconfig.json -> "strict": true 주석처리 하면 Error X 
// let MyName: string = null;
// let u: undefined = null;
// let v: void = void;

let v: void = undefined;

// union = 합집합 (string과 null을 모두 가지고 있고 사용할 수 있다.)
let union: string | null = null;
union = "Mark";

/**
 * Null in JavaScript
 * 1. null 이라는 값으로 할당된 것
 * 2. 무언가가 있는데 사용할 준비가 덜 된 상태
 * 3. null 이라는 타입은 null 이라는 값만 가질 수 있습니다.
 * 4. 런타임에서 typeof 연산자를 이용해서 알아내면, object입니다.
 */

// let n: null = null;

// console.log(n); // null
// console.log(typeof n); // object

/**
 * Undefined in JavaScript
 * 1. 값을 할당하지 않은 변수는 undefined라는 값을 가진다.
 * 2. 무언가가 아예 준비가 안된 상태(변수 선언만 하고 할당하지 않은 상태)
 * 3. object 의 property가 없을 때도 undefined
 * 4. 런타임에서 typeof 연산자를 이용해서 알아내면, undefined
 */

// let u: undefined = undefined;

// console.log(u); // undefined
// console.log(typeof u); // undefined