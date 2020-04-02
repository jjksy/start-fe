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

