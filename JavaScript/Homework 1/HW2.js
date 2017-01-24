function Sayhello() {
    var c = prompt("Enter your username");
    alert("Hello " + c);
}
Sayhello();

var lines = prompt("Введите вісоту елки");
var str = " ";
var star = "*";
for (var i = 0; i < lines; i++) {
    str += star;
    console.log(str);
}


var result;
function calc(a, b, c) {
    var a = prompt("Введите первое число");
    var c = prompt("Какое мат.действие?");
    var b = prompt("Введите второе число");
    if (c == "+") {
        result = a * 1 + b * 1;
    }
    if (c == "-") {
        result = a - b;
    }
    if (c == "*") {
        result = a * b;
    }
    if (c == "/") {
        result = a / b;
    }
    alert(result);
}
calc();

function charCount(str) {
    var str;
    var char = str.length;
    console.log(char);
}
charCount("hello pizduli asdasd zxzczx");

