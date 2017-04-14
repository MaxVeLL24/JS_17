var inp = document.getElementsByTagName('input')[0];
var underInput = document.getElementsByClassName('calc-output')[0];

var numberBotton = document.querySelectorAll('.calc-body .calc-nubers button');

for (var i = 0; i < numberBotton.length; i++) {
    numberBotton[i].onclick = function () {
        if (this.innerHTML == 'c') {
            inp.value = '';
        }
        else {
            inp.value += this.innerText;
        }
    }
}
var actionButtons = document.querySelectorAll('.calc-body .calc-actions button');
var numberBufer = document.getElementsByClassName('calc-output')[0];

for (var j = 0; j < actionButtons.length; j++) {
    actionButtons[j].onclick = function () {
        if (this.innerText == '-') {
            numberBufer.innerText = inp.value;
            numberBufer.dataset.action = 'rozn';
            inp.value = '';
        }
        else {
            numberBufer.innerText = inp.value;
            inp.value = '';
            numberBufer.dataset.action = 'sum';
        }
    }
}


var resultButton = document.getElementsByClassName('calc-result')[0];

resultButton.onclick = function () {
    if (numberBufer.dataset.action == 'sum') {
        var result = parseInt(inp.value) + parseInt(numberBufer.innerText);
        inp.value = result;
        numberBufer.innerText = '';
    }
    else {
        var result = parseInt(numberBufer.innerText) - parseInt(inp.value);
        inp.value = result;
        console.log(result);
        numberBufer.innerText = '';
    }
};