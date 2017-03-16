var field = document.getElementById('field');
var ball = document.getElementById('ball');
var goal = document.getElementById('white');
var goalCords = goal.getBoundingClientRect();
var fieldCoords = field.getBoundingClientRect();
var ballCoords = ball.getBoundingClientRect();

field.onclick = function (e) {
    var fieldInnerCoords = {
        top: fieldCoords.top + field.clientTop,
        left: fieldCoords.left + field.clientLeft
    };

    ball.style.left = e.clientX - fieldInnerCoords.left + 'px';
    ball.style.top = e.clientY - fieldInnerCoords.top + 'px';

    while (70<=ball.x<=130 || 0<=ball.y<=20){
    alert('congratulations');
    }
};