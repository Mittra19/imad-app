console.log('Loaded!');

var element= document.getElementById('main-text');
element.innerHTML= 'New Text';

var img= document.getElementById('madi');
var marginLeft= 0;
function moveRight(){
    marginLeft= marginLeft + 2;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function(){
    var interval= setInterval(moveRight, 25);
    img.style.marginLeft='150px';
};