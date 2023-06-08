/**
 * object
 * - a type that represents the non-primitive type
 * - "primitive type이 아닌 것"을 나타내고 싶을 때 사용하는 타입
 * 
 * non-primitive type
 * - not number, string, boolean, bigint, symbol, null, or undefined
 */

// create by object literal
const person1 = {name: 'Mark', age: 39};

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.

// create by Object.create
// = 내장 전역 객체
// ()안에 primitive type이 아닌 값이 와야한다.
const person2 = Object.create({name: 'Mark', age: 39});

// 사용 가능
// obj = {name: 'Mark'};
// obj = [{name: 'Mark'}];

// Error
// obj = 39;
// obj = 'Mark';
// obj = true;
// obj = 100n;
// obj = symbol();
// obj = null;
// obj = undefined;

// primitive type은 받지 X 제약사항
declare function create(o: object | null): void; 

create({ prop: 0 });
create(null);

// Error
// create(42);
// create("string");
// create(false);
// create(undefined);

// Object.create(0);