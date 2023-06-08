/**
 * Array = 같은 type의 요소들을 묶어 놓은 것
 * - 배열 안에 있는 모든 요소들은 같은 type
 * - 원래 Javascript에서 array는 객체
 * - 사용방법
 * |- Array<타입>
 * |- 타입[]
 */

// 표현 
let list: number[] = [1, 2, 3]; // 추천!!
// let list: Array<number> = [1, 2, 3]

let list1: (number | string)[] = [1, 2, 3, "4"];