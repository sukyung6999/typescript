// 타입 단언 (type assertion)
var aa;
aa = 20;
aa = 'a'
var bb = aa as string; 

// DOM API 조작
// <div id="app">hi</div>
var div = document.querySelector('div') as HTMLDivElement;
div.innerText;
