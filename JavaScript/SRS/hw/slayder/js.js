var width = 140;
var count = 3;

var carousel = document.getElementById('carousel');
var list = carousel.querySelector('ul');
var listElems = carousel.querySelectorAll('li');

var position = 0;

carousel.querySelector('.prev').onclick = function() {

    position = Math.min(position + width, 0);
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};




