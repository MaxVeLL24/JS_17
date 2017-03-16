var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

a1.innerHTML = "res";
a2.innerHTML = "Block2";
a3.innerHTML = "Block3";

a1.style.background = "red";
a2.style.background = "green";
a3.style.background = "blue";


function block() {
    var name = prompt("paste number of block", "1");
    var a = document.getElementById("a" + name);

    var col = prompt("paste color of selected block", "red");
    a.style.background = col;
}
block();

var r = document.getElementById("rand");

function getR(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// for (var i = 0; i < 10; i++) {
//     var a = getR(0, 255);
//     var b = getR(0, 255);
//     var c = getR(0, 255);
//     var zz = r.style.background = "rgb(" + a + "," + b + "," + c + ")";
//     alert(zz)
// }
// setInterval(getR,1500);

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [11, 12, 13, 14, 15];
var arr3 = [21, 22, 23, 24, 25];
var arr4 = [31, 32, 33, 34, 35];

var res = [];
res[1] = getR(arr1[1], arr1[4]);
res[2] = getR(arr2[1], arr2[4]);
res[3] = getR(arr3[1], arr3[4]);
res[4] = getR(arr4[1], arr4[4]);
console.log(res);


var dem = document.getElementById("demo");
dem.innerHTML = "asdasdsa";