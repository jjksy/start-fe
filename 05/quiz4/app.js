var $body = document.body;
var $box = document.getElementById('box');
var moveX = 0;
var moveY = 0;
var moveX2 = 0;
var moveY2 = 0;

function dragBox(x,y){

}

function mouseDown(event){
    moveX = event.movementX;
    moveY = event.movementY;
}

function mouseMove(event){
    moveX = event.movementX;
    moveY = event.movementY;

    moveX2 = event.movementX - moveX;
    moveY2 = event.movementY - moveY;

    dragBox(moveX2,moveY2);
}

function mouseUp(){

}