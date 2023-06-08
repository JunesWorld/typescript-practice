/**
 * void
 * - 어떤 타입을 가지지 않는 빈 상태
 * - 값은 없고 type만 있다.
 * - undefined를 return할 때 사용
 * - return을 가지고 무엇도 하지 않겠다.
 */

function returnVoid(message: string): void {
  console.log(message);

  return;
  // 유일하게 올 수 있는 값 = undefined
  // return undefined;
}

returnVoid('리턴이 없다.');