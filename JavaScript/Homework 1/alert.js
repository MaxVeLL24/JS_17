function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
var x = prompt("x?", '');
var n = prompt("n?", '');
alert(pow(x, n));

function chet(k, n) {
    for (var i = k; i <= n; i++) {
        if (i % 2 == 0) {
            alert(i + " - парне");
        }
        else if (i % 2 == 1) {
            alert(i + " - не парне")
        }
    }
}
chet(1, 30);


var sum = 0;
for (var i = 20; i <= 40; i++)
    sum += i;
alert(sum);

var suma = 0;
for (var i = 10; i <= 60; i++)
    if (i % 3 == 0 && i % 10 !== 0)
        suma += i;
alert(suma);
___________________________
for (i = 1; i <= 10; i++)
    for (j = 2; j <= 10; j++)
        console.log("i+j");
____________________________

var c = prompt("Введите день");
var b = prompt("Начальний метраж");
var a = prompt("Увеличение кажен день на");
if (c = "1") {
    var per = a + (a * b);
    alert(per)
}
else if (c = "2") {
    var dru = per + per * 0.1;
    alert(dru)
}
else if (c = "3") {
    var tret = dru + dru * 0.1;
    alert(tret)
}
else if (c = "4") {
    var chetv = tret + tret * 0.1;
    alert(chet)
}
else if (c = "5") {
    var pyat = chetv + chetv * 0.1;
    alert(pyat)
}

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(7));

function fib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert(fib(3));


do {
    name = prompt("Enter your login name")
} while (name != "admin");

do {
    password = prompt("Enter your password");
} while (password != "123123");
alert("Hello,admin");

