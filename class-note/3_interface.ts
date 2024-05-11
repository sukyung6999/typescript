interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var sukyung: User = {
  age: 27,
  name: '수경'
}

// 함수에 인터페이스 활용
function getUser(use: User) {
  console.log(user);
}
const capt = {
  name: 'captin',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number
}
// var sum: SumFunction;
// sum = function(a, b) {
//   return a + b;
// }
var sum: SumFunction = function (a, b) {
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string
}
var arr1: StringArray = ['a', 'b', 'c'];
// arr1[0] = 10; // 'a'

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}
var obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}
Object.keys(obj).forEach((value) => )

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  language: string;
}

var captin: Developer = {
  language: 'ts',
  name: 'captin',
  age: 100
}