// interface Person1 {
//   name: string;
//   age: number;
// }
type Person1 = {
  name: string;
  age: number;
}

var sukyungLee: Person1 = {
  name: '수경',
  age: 27
}

type MyString = string;
var str: MyString = 'hello';

type Todo = {
  id: number;
  title: string;
  done: boolean;
}
function getTodo(todo: Todo) {

}