/**
 * 1. 다른 언어에서와 마찬가지로 텍스트 형식을 참조하기 위해 `string` 형식 사용
 * 2. 문자열 데이터를 둘러싸기 위해 ""나, '',를 사용
 * Templat String
 * 1. 행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
 * 2. 이 문자열은 backquote 기호에 둘러쌓여 있다.
 * 3. 포함된 표현식은 `${expr}`와 같은 형태로 사용
 */

let myName: string = 'June';

myName = "Mark"

let fullName: string = 'June Lee';
let age: number = 30;
let sentence: string = `Hello, My name is ${ fullName }.

I'll be ${age + 1} years old next month.`;

console.log(sentence);