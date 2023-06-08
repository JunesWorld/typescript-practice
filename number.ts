/**
 * JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점 값.
 * TypeScriptsms 16진수 및 10진수 리터럴 외에도, ECMAScript 2015에 도입된 2진수 및 8진수를 지원
 * NaN
 * 1_000_000과 같은 표기 가능
 */

// 10진수
let decimal: number = 6;

// 16진수
let hex: number = 0xf00d;

// 2진수
let binary: number = 0b1010;

// 8진수
let octal: number = 0o744;

let notANumber: number = NaN;

// 백만
let underscoreNum: number = 1_000_000;