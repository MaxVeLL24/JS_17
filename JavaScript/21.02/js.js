var ball = document.getElementById('ball');
ball.ondragstart = function () {
    return false;
};
ball.onmousedown = function (e) {
    var cords = getCords(ball);
    var shiftX = e.pageX - cords.left;
    var shiftY = e.pageX - cords.top;
    ball.style.position = 'absolute';
    move(e);
    document.body.appendChild(ball);
    ball.style.zIndex = 1000;

    function move(e) {
        ball.style.top = e.pageY - shiftY + "px";
        ball.style.left = e.pageX - shiftX + "px";
    }

    document.onmousemove = function (e) {
        move(e);
    };

    ball.onmouseup = function (e) {
        document.onmousemove = null;
        ball.onmousedown = null;
    }
};

function getCords(el) {
    var cords = el.getBoundingClientRect();
    return {
        // top: cords.top + pageYOffset,
        left: cords.left + pageXOffset
    }
}

osman-ThinkPad-E460 (21:00):
var sliderElem = document.getElementById('slider');
var thumbElem = sliderElem.children[0];

thumbElem.addEventListener('mousedown', function (e) {
    function getCoords(el) {
        var coords = el.getBoundingClientRect();
        return {
            left: coords.left + pageXOffset
        }
    }

    var thumbCoord = getCoords(thumbElem);
    var shiftX = e.pageX - thumbCoord.left;
    var sliderCoords = getCoords(sliderElem);

    document.onmousemove = function (e) {
        var left = e.pageX - shiftX - sliderCoords.left;

        if (left < 0) {
            left = 0;
        }

        var right = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (left > right) {
            left = right;
        }

        thumbElem.style.left = left + 'px';
    };

    document.onmouseup = function (e) {
        document.onmousemove = thumbElem.onmousedown = null;
    }
});

thumbElem.ondragstart = function () {
    return false;
};

thumbElem.addEventListener('wheel', function (e) {
    console.dir(e.deltaY);
});
var scale = 1;

wheel.addEventListener('wheel', function (e) {

    var delta = e.deltaY;
    if (delta > 0) {
        scale += 0.05;
    } else {
        scale -= 0.05;
    }

    wheel.style.transform = 'scale(' + scale + ')';
    e.preventDefault();
});

window.onscroll = function (e) {
    console.dir(e);
}