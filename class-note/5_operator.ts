// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var sukyung: string | number | boolean;
function logMessage(value: string | number) { // 유니온 타입
  // 타입 가드
  if (typeof value === 'number'){
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.charAt;
  }

  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer11 {
  name: string;
  skill: string;
}
interface Person11 {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer11 | Person11) {
//   someone.name
// }

// askSomeone({ name: '디벨로퍼', skill: '웹 개발'});
// askSomeone({ name: '캡틴', age: 100});

function askSome(someone: Developer11 & Person11) {
  someone.name;
  someone.age;
  someone.skill;
}

askSome({name: '디벨로퍼', skill: '웹개발', age: 27});