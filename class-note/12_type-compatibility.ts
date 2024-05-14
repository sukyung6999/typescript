// 인터페이스
interface Developerrrr {
  name: string;
  skill: string;
}
// interface PPerson {
//   name: string;
// }
class PPerson {
  name: string;
}

var develperrrrr: Developerrrr;
var pppersone : PPerson;
develperrrrr = pppersone;
pppersone = develperrrrr;

// 함수 
var add = function(a: number) {
  console.log(a);
  
}
var summ = function(a: number, b: number) {

}
add = summ;
summ = add;

// 제너릭
interface Empty<T> {

}
var empty1: Empty<string>
var empty2: Empty<number>
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;