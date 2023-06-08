/**
 * Unknown
 * - 응용 프로그램을 작성할 때 모르는 변수의 타입을 묘사해야 할 수도 있다.
 * - 이러한 값은 동적콘텐츠가 있습니다.
 * |- 동적콘텐츠(예: 사용자로부터, 또는 우리 API의 모든 값을 의도적으로 수락하기를 원할 때)
 * - 이 경우, 컴파일러와 미래의 코드를 읽는 사람에게 이 변수가 무엇이도 될 수 있음을 알려주는 타입을 제공하기를 원하므로 unknown 타입을 제공합니다.
 * 
 * Point!! TypeGuard로 한정시켜서 사용!!
 * 
 * - any와 짝으로 any 보다 Type-safe한 타입
 * |- any와 같이 아무거나 할당할 수 있다
 * |- 컴파일러가 타입을 추론할 수 있게 타입의 유형을 좁히거나
 * |- 타입을 확정해주지 않으면 다른 곳에 할당 할 수 없고, 사용할 수 없다.
 * 
 * - unknwon 타입을 사용하면 runtime error를 줄일 수 있을 것 같다.
 * |- 사용 전에 데이터의 일부 유형의 검사를 수행함을 알리는 API에 사용할 수 있을 것 같다.
 */

declare const maybe: unknown;

// Error : unknown은 number에 바로 할당 할 수 없다
// const aNumber: number = maybe;

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // Error : 이 if문에서는 maybe가 boolean이기 때문에 string에 할당 불가
  // TypeGuard !! 
  // const aString: string = maybe;
}

// TypeGuard! 이곳에서는 string
if (typeof maybe === 'string') {
  const aString: string = maybe;
}