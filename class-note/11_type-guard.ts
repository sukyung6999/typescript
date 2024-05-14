interface Developerr {
  name: string;
  skill: string;
}

interface Persoon {
  name: string;
  age: number;
}

function introduce(): Developerr | Persoon {
  return {name: 'Tony', age: 33, skill: 'Iron Making'};
}
var tony = introduce();
console.log(tony.skill);
console.log(tony.name);

if ((tony as Developerr).skill) {
  var skill = (tony as Developerr).skill;
  console.log(skill);
} else if ((toy as Persoon).age) {
  var age = (tony as Developerr).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloperr(target: Developerr | Persoon): target is Developerr {
  return (target as Developerr).skill !== undefined;
}

if (isDeveloperr(tony)) {
  tony.skill
} else {
  tony.age
}