//dom
var $textbtn = document.querySelector('.text-btn');
var $body = document.body;
var $addRbtn = document.querySelector('.add-red');
var $addBtn = document.querySelector ('.add-btn');
var $deleteBtn = document.querySelector ('.delete-btn');
var $resetBtn = document.querySelector ('.reset-btn');
var $toggleBtn = document.querySelector ('.toggle-btn');
var $imgBtn = document.querySelector ('.image-btn');
var $boxes = document.querySelectorAll('.' + boxClass);
var $box = document.createElement('div');
var $img = document.createElement('img');


var text = $textInput.value;
var clickEvent = 'click';
var boxClass = 'box';
var redClass = 'red';
var hiddenStyle = 'display:none;';
var imgURL = 'https://i.imgur.com/69NjYBH.png';

var isHidden = false;

function getAllBoxes() {
    return $boxes;
}


//1
function addRedClass(){ 
    //if click .add-red >> add .red to .box-class attribute
    getAllBoxes().forEach(function($box){
        $box.classList.add(redClass);
    })
}
addRedClass();

//2
function addElm(){
    //if click .add-btn >> add .box elm in body one by one
    $box.classList.add(boxClass);

    if(isHidden){
        //change attribute
    }
    return $box;
}
function addbox(){
    var $box = createBox();
    $body.appendChild($box);
}
//3
function removeBox(){
    //if click .delete-btn >> delete all .box elm one by one
    var $boxes = getAllBoxes();
    var $xBox = $boxes.item($boxes.length -1);

    if($xBox){
        $xBox.remove();
    }
}
//4
function addText(){
    
}

//5
function removeBoxes(){
    $box.remove();
}
//6
function toggleBoxes(){
    isHidden = !isHidden;
    var style = isHidden ? hiddenStyle : '';
    $box.style = style;
}
//7
function showImg(){
    var $boxes = getAllBoxes();
    if($boxes.length === 0){
        addbox();
    }
    $img.src = imgURL;
    $box.append($img);
}
//8
//재사용..