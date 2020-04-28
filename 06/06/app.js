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
/* const arr = [1, 2, 3];
// const newArr = arr.map(function(item){
//     return item + 1;
// });
// console.log(newArr);

const newArr = arr.map((item) => item + 1);
console.log(newArr);

document.getElementById('box').addEventListener('click', event => 
console.log(1));
 */
/* function sum(x,y,z){
    return x+y+z;
}
const numbers = [1,2,3];
console.log(sum(...numbers)); */

/* const words = ['a','b'];
const newWords = [...words];
console.log(newWords);

const arr1 = [3,4,5];
const arr2 = [1,2, ...arr1, 6,7];
console.log(arr2); //[1,2,3,4,5,6,7]

// a = [1];
// b = a;
// b.push(2);
// console.log(b);

const obj = {
    a: 1,
    b: 2,
};
const newObj = {...obj};
console.log(newObj); */

/* function func(...param){
    console.log(param);
}
func(1,2,3); */

/* function func(){
    console.log(arguments);
}
func(1,2,3); */

const words =  ['a','b'];
const [c1,c2] = words
console.log(c1);