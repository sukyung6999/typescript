// function fetchItems(): string[] {
//   const items = ['a', 'b', 'c'];

//   return items;
// }
// let result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
  var items = ['a', 'b','c'];
  return new Promise((resolve, reject) => {
    resolve(items);
  })
}
fetchItems();