var ULka = document.getElementsByTagName('ul')[0];

var LIki = ULka.getElementsByTagName('li');

for (var i = 0; i < LIki.length; i++) {
    var li = LIki[i];

    var span = document.createElement('span');
    li.insertBefore(span, li.firstChild);
    span.appendChild(span.nextSibling);
}

ULka.onclick = function (event) {
    var target = event.target;
    if (target.tagName != 'SPAN') {
        return;
    }
    var childrenContainer = target.parentNode.getElementsByTagName('ul')[0];
    if (!childrenContainer) return;
    else {
        childrenContainer.hidden = !childrenContainer.hidden;
    }
};