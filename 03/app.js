console.log('app');

//Create
var todos = ['운동'];
var todo = '게임';
todos.push(todo);
console.log(todos);

//Read
var todos = ['운동','게임'];
todos.forEach(function(todo){
    console.log(todo);
});

//Update
var todos = ['운동','게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo){
    return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

var todos = ['운동','게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo){
    if (todo === updateTodo) {
        return '공부';
    }
    return todo;
});
console.log(newTodos);

//-----------------
//Delete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1);
console.log(todos);

var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);

//-----------------
var num = new Array( 10,20,30,40,50,60,70,100);

document.write('합계: ' , sum(num), '<br />');
document.write('산술 평균: ' , average(num), '<br />');



// 배열 합계 구하기 함수
function sum(array) {
  var result = 0.0;

  for (var i = 0; i < array.length; i++)
    result += array[i];

  return result;
}


// 배열 평균 구하기 함수
function average(array) {
  var sum = 0.0;

  for (var i = 0; i < array.length; i++)
    sum += array[i];

  return sum / array.length;
}
//------------------------
for(i=2; i<10; i++){
    for(j=1; j<10; j++){
      result = i + "x" + j + "=" + i*j + "<br>";
      document.write(result);
    }
  }
//------------------
function multiplication(x) {
    var result = [];
    for (var i = 1; i <= 9; i++) {
        result[i] = x * i;
    }
    return result;
};

function iResult(x, result) {
    for (var i = 1; i <10; i++) {
        document.write(x + " * " + i + " = " + result[i] + "<br>")
    }
};

function main() {
    console.log("run") 
    for (var i = 2; i <10; i++) {
        var ret = multiplication(i);
        printResult(i, ret);
    }            
};

main();
//-----------------
var dog ={
    name:"Grace",
    prettyGirl: function(){
        console.log("Good girl~");
    }
};
dog.prettyGirl();
//-----------------------
var num1= prompt("첫번째 숫자를 입력해주세요: ");
    var n1 = Number(num1);
    var num2 = prompt("두번째 숫자를 입력해주세요: ");
    var n2 = Number(num2);
    var plus = n1+n2
    console.log(n1+"+"+n2+"="+plus);