/**
 * Any = 어떤 Type이 와도 상관 없다.
 * - 최대한 사용하지 않는 것이 좋다.
 * - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문이다.
 * - 그래서 컴파일 옵션 중에는 any를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있습니다.
 * |- (=noimplicitAny)
 * - 사용하는 곳 = 단순한 Message(log만 찍는 곳)
 * - 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
 * 
 * - any는 계속해서 개체를 통해 전파된다. = 타입의 안정성을 잃는다.
 */

// tsconfig.json ->  "noImplicitAny": true,
// message 뒤에 any(or 적절한 가이드) 붙여줄 것! (사용x = Error)
function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

// 전파 = 안정성 x
let looselyTyped: any = {};
const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  // const a = obj.num;
  const a: number = obj.num; // 누수 막음 (number)
  const b = a + 1;
  return b;
}
const c = leakingAny({ num: 0 })
// c.indexOf("0"); // Error!