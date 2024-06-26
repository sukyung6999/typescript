// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이
// logText(false); // 진위값 false

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('하이'); 

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const strr = logText<string>('hi');
const login = logText<boolean>(true);
// logText('a');
// logText(10);


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const objj: Dropdown<number> = {
  value: 10,
  selected: false
}

// 제너릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function(item) {
    console.log(item);
  })
  return text;
}
logTextLength(['hi']);

// 제너릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}
function logTextLengthh<T extends LengthType>(text: T):T {
  text.length;
  return text;
}
logTextLengthh('a');
logTextLengthh(10);
logTextLengthh({length: 10});

// 제너릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
  return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<string>('bag');
getShoppingItemOption('name');