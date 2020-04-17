var $body = document.body;
var $box = document.querySelector('#box');
var moveX = 0;
var moveY = 0;
var moveX2 = 0;
var moveY2 = 0;

function dragBox(){
    //
}

function mouseDown(event){
    moveX = event.movementX;
    moveY = event.movementY;

    $body.addEventListener('mousemove',mouseMove);
    $box.addEventListener('mouseup',mouseUp);
}

function mouseMove(event){
    moveX = event.movementX;
    moveY = event.movementY;

    moveX2 = event.movementX - moveX;
    moveY2 = event.movementY - moveY;

    dragBox(moveX2,moveY2);
}

function mouseUp(){
    $body.addEventListener('mousemove',mouseMove);
    $box.addEventListener('mouseup',mouseUp);
}

$box.addEventListener('mousedown',mouseDown);