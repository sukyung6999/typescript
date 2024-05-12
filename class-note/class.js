// ES2015(ES6) 이전 : 생성자 함수로 구현
function Perssson (name, age) {
  this.name = name;
  this.age = age;
}
// ES2015(ES6) 이후 : class 기반 문법(바벨로 돌리면 생성자 함수로 되어있음)
class Persson {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

var sukyung = new Persson('수경', 27);
console.log(sukyung);