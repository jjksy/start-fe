//window

// console.log(window.outerWidth);
// console.log(window.name);
// window.open('http://www.naver.com');
// window.close;

//location
// location.href = 'url'; //하면 해당 주소로 이동함
// location.reload(); //reload하는 것

// window.location
// location
// // window.alert(1)

//history 브라우저 정보
        // history.back();
        // history.forward();
        // history.go(1); 
//이전 값의 주소를 가져 올 수는 없음. 개인정보 유출 가능성 있기 때문

// //screen
// screen.width
// screen.availWidth

// //navigator
// navigator.userAgent
// navigator.language
// navigator.platform

// //----------------------------------------------
// //dom 탐색

// var debug = document.getElementById('debug');
// console.log(debug);
// var box = document.querySelector('#debug');
// console.log(box)


// var box = document.querySelector('.box');
// var box2 = document.querySelector('.box');

// console.log(box2);

// var div = document.createElement('div');
// // console.log(div);
// div.style.border = '1px solid #000';
// div.innerHTML = 'hello!';
/* document.body
<body>​…​</body>​
document.querySelector('body')
<body>​…​</body>​
document.body.appendChild
ƒ appendChild() { [native code] } */

/* document.body.appendChild(div);
console.log(div); */
/* 
const span = document.createElement('span');
const textNode = document.createTextNode('hello!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

 */

//  var debug = document.getElementById('debug');
//  debug.remove();

// const list = document.getElementById('list');
//list.removeChild(list.children[0]);
//-----------------------------------------

/* document.body.addEventListener('click',function(){
    console.log(click);
}) */

/* document.querySelector('.box').addEventListener('click',function(){
    console.log('click');
}); */
/* function clickbody(){
    console.log('click');
}
document.querySelector('.box').addEventListener('click',clickbody); */

/* var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments,event,event.type, event.currentTarget);
}
document.body.addEventListener('click',popup);
 */
//__----------------------

/* var list = document.querySelector('#list');
console.log(list.children);
// debugger;
for(var i =0; i<list.children.length; i++){
    console.log(list.children[i]);
    list.children[i].addEventListener('click',function(){
        console.log(1);
    });
} */

/* var list = document.querySelector('#list');
console.log(list.children);

var app = document.getElementById('list');
app.addEventListener('click',function(event){
    if(event.target.nodeName == "LI"){
        // 한개의 event리스너로 모든 li 에 click 이벤트 등록과 비슷
        console.log(2);
    }
}); */
/* var list = document.querySelector('#list');
console.log(list.children);

var app = document.getElementById('list');
app.addEventListener('click',function(event){
    if(event.target.nodeName == "LI"){
        // 한개의 event리스너로 모든 li 에 click 이벤트 등록과 비슷
        console.log('li');
        event.stopPropagation();
    }
});

document.body.addEventListener('click',function(){
    console.log('body');
}); */

var link = document.querySelector('#link');
link.addEventListener('click',function(){
    console.log(11111);
    // event.stopPropagation();
    event.preventDefault();
});

