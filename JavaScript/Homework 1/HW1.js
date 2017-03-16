// function pow(x, n) {
//     var result = x;
//
//     for (var i = 1; i < n; i++) {
//         result *= x;
//     }
//
//     return result;
// }
//
//
// var x = prompt("x?", '');
// var n = prompt("n?", '');
// alert(pow(x, n));
//
// function chet(k, n) {
//     for (var i = k; i <= n; i++) {
//         if (i % 2 == 0) {
//             alert(i + " - парне");
//         }
//         else if (i % 2 == 1) {
//             alert(i + " - не парне")
//         }
//     }
// }
// chet(1, 30);
//
//
// var sum = 5;
// for (var i = sum + 1; i <= 10; i++)
//     sum += i;
// alert(sum);
//
//
// var suma = 10;
// for (var i = suma + 1; i <= 60; i++)
//     if (i % 3 == 0 && i % 10 !== 0)
//         suma += i;
// alert(suma);
//
//
// for (var i = 2; i <= 10; i++) {
//     for (var j = 2; j <= 10; j++) {
//         document.write(i + 'x' + j + ' = ' + i * j + '<br />');
//     }
//     document.write('<br />');
// }
//
//
// var i = 500,
//     floats = [];
//
// while (i < 7000) {
//     i = (i + 0.1 * i).toFixed(1);
//     floats.push(i);
//     i = parseFloat(i);
//
// }
// console.log(floats);
// console.log(floats[3] + "za 5 dniv probig");
// console.log(floats[10] + "za 12 dniv probig");
// console.log(floats.length - 2 + " днів треба шоб пробігти Васі 7000км");
//
//
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// ;
//
//
// alert(factorial(7));
//
//
// function fib(n) {
//     var a = 1,
//         b = 1;
//     for (var i = 3; i <= n; i++) {
//         var c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
//
// alert(fib(3));
//
//
// do {
//     name = prompt("Enter your login name")
// } while (name != "admin");
//
// do {
//     password = prompt("Enter your password");
// } while (password != "123123");
// alert("Hello,admin");
//
