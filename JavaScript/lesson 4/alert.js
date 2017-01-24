// pow = function (x, n) {
//     var b = x;
//     for (var i = 1; i < n; i++) {
//         b *= x;
//     }
//     return b;
// };
// alert(pow(5, 4));

// function one () {
//     two();
// }
// function two() {
//     one();
// }
// one();
// var x=1;
//
// function myF () {
//     var x=2;
//     return x;
// }
// myF();
// console.log(x);
//
var landscape = function () {
    var result = "";
    var flat = function (size) {
        for (var count = 0; count < size; count++) {
            result += "_";
        }
    };
    var mountain = function (size) {
        result += "/";
        for (var count = 0; count < size; count++) {
            result += "'";
        }
        result += "\\";

    };
    flat(3);
    mountain(6);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());

var min=function (a,b,c) {
    var result;
    if (a>b && a>c){
        result=a;
    }
    else if(a<b && b>c){
        result=b;
    }
    else if(c>a && b<c){
        result=c;
    }
};