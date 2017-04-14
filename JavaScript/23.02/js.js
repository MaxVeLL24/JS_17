document.getElementsByTagName('input')[0].onkeypress = function (e) {

    e = e || event;
    var chr = getChar(e);
    if (chr < '0' || chr > '9') {
        return false;
    }

};
function getChar(event) {
    if (48 <= event.keyCode <= 57) {
        return String.fromCharCode(event.keyCode)
    }
    return null;
}
function perevirka(input) {
    input.value = input.value.replace(/[^0-9]/g, '');
    // input.value=input.value.replace(/[^\d,]/g, '');
}
var codes=