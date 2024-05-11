// 함수의 파라미터에 타입을 정의하는 방식
function sum1(a: number,b: number) {
  return a + b;
}

sum(10, 20);

// 함수의 반한 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
  return a + b;
}
// 타입스크립트는 정해진 인자의 갯수만 사용가능하도록 제한함
sum(10, 20, 30, 40); // 30

// 함수의 옵셔널 파라미터 - ?
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello ts', 'a');
