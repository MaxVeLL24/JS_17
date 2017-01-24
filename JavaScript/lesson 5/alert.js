// function ask(question, yes, no) {
//     var answer = confirm(question);
//     if (answer) yes();
//     else no();
// }
//
// function yes() {
//     alert("Answer is yes")
// }
// function no() {
//     alert("Answer is no")
// }
//
// ask("hello", yes, no);
//
// ask("question", function () {
//     alert("correct")
// }, function () {
//     alert("incorrect")
// });


// var str = "Hello";
// var str2="";
// for (var i = 0; i < str.length; i++) {
//     str2 += str.charAt(i) + (i + 1);
//     console.log(str2);
// }
//
//
// var str = "Hello";
// var str2 = "";
// for (var i = 1; i <= str.length; i++) {
//     str2 += str[i - 1] + i;
// }
// console.log(str2);

// function search (str,substring) {
//     var count=0;
//     var pos=0;
//     while (true){
//         var foundPos=str.indexOf(substring,pos);
//         if(foundPos==-1)
//             break;
//         count++;
//         pos=foundPos+1;
//     }
//     return count;
// }
// search("hello world","l");

// function search (str,substring) {
//     var count=0;
//     var result="";
//     var pos=0;
//     while (true){
//         var foundPos=str.indexOf(substring,pos);
//         if(foundPos==-1)
//             break;
//         result=foundPos+",";
//         pos=foundPos+1;
//     }
//     return result;
// }
// search("hello world","l");

str.substr
    substring
    slice

H/w))
