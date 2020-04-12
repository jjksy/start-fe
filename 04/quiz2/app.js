var unclick = 0;
var chess = document.getElementById("chess");

for(var i=0; i<4; i++){
    for(var j=0; j<4; j++) {
        var point = document.createElement('span');
        var color
        if ((j + (i * 5)) % 2 == 0) {
            color = 'black';
        } else {
            color = 'white';
        }

        point.setAttribute('id', 'point'+(j + (i * 4)));
        point.classList.add(color);
        chess.appendChild(point);
    }
}
chess.addEventListener('click', function(event) {
    var id = event.target.getAttribute('id');
    if (id.startsWith('point')) {
        chess.children[unclick].classList.remove('click');
        event.target.classList.add('click');
    }
});