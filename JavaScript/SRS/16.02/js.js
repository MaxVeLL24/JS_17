var buttons = document.querySelectorAll('#messages-container .remove-button');

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];

    button.onclick = function() {
        var el = this.parentNode;
        el.parentNode.removeChild(el);
    };
}