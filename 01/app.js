console.log('app.js');

//변수 & 주석
// var name = 'Yeon';
/*
var Name = 'YEON';

console.log(name);
console.log(Name);*/

console.log(1);
console.log(2);

//데이터 타입
var count =5; 
console.log(1);
    //number

var nick = "my nick is 'fe'";
var homepage = 'github.com/jjksy';
    //string

var isMan = true; //True | False
console.log(isMan);

console.log(nick =='');
console.log(!!'test'); //true
    //Boolean

    var log = function(str) {
        console.log(str);
      };
      function log(str) {
        console.log(str);
      }
      log("hello");
      //function : js코드로 조작할수 있는 형태의 값 변수나 배열, 객체에 저장가능, 전달인자로도 사용


 var image = {
     width: 100,
    height: 100,
    name: '1.png',
}; // image = new Object();
console.log(image);
//----------
image.width = 1;
image.height = 2;

image['width'] = 1; //연관배열

// image['name' + i] = '1.jpg'; //동적으로도 할당 가능

image = { width: 1, height: 2 };
      //object

var image1 = [1,2,3,4,5,6,7,8,9,10,11,12];
image1[0] = '3';


var nick = null;
var nick; //undefined