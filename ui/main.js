console.log('Loaded!');

var element= document.getElementById('main-txt');
element.innerHTML= 'New Text';

var img= document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft='150px';
};