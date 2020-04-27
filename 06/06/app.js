/* //var a = 'aa';
let a = 'aa';
const b = 'bb';
var c = '11';
c = 33;
// b = 11; // 에러남
console.log(a,b,c); */

// var str =  'aaaaaaaa
// sdfs';  //이러면 에러남

/* const s = `aaaaaaa
cccccccc
ddddddddd`;
console.log(s); */
/* 
function sum(x,y){
    return x+y;
}
console.log(sum(1,2));

 */
const arr = [1, 2, 3];
// const newArr = arr.map(function(item){
//     return item + 1;
// });
// console.log(newArr);

const newArr = arr.map((item) => item + 1);
console.log(newArr);

document.getElementById('box').addEventListener('click', event => console.log(1));