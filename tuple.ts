// 다른 Type
let x: [string, number];

// 타입, 순서, 길이 맞아야한다.
x = ["hello", 39]

// Error!

// 타입 순서 일치 X
// x = [10, "Mark"]; 

// 길이 오류
// 2 이후에는 type이 지정될 수 없게 undefined로 지정된다.
// x[2] = "world";

const person: [string, number] = ["Mark", 39];

// first = string / second = number / third = Error!
const [first, second] = person;