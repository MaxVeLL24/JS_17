// "Hello".substring(0.-3);
// "Hello".substr(0.3);
// "Hello".slice(0.-3);
//
// var student = new Object();
// student.age = 25;
// alert(student.age);
// student['name'] = "John";
// student['Date of birthday'] = "25.08.1992";
// delete student.age;
//
// var student2 = {
//     firstName:"John",
//     lastName:"Doe",
//     age:50,
//     eyeColor:"blue"
// };
// alert(student2.eyeColor);

// var student = {
//     course: "WebSeo",
//     course2: "JS",
//     age: "18"
// };
// i = 0;
// // for (var key in student) {
// //     i++;
// //     console.log(i + "Kluch:'" + "'key+'Znachen" + student[key] + "'");
// // }
//
// function notempty() {
//     var i = 0;
//     for (var key in student) {
//         i++;
//         return i ==0?true;false;
//     }
// }
//
// var sir = {};
//
// notempty(student);

// var student={age:25,course:"webs"};
// student.age=35;
//
// function cloneObject(object) {
//     var clone={};
//     for(var key in object){
//         clone[key]=object[key];
//     }
//     return clone
// }
// var alumnus=cloneObject(student);
// console.log(alumnus);

// var courses = ["js", "html", "php"];
// courses[999]="python";
// alert(courses);

var tod1 = [];

function rememberTo() {
    var todo=todo.push("Покормить кота");
}
function whatisnext() {
    todo=todo.shift("Винести мусор");
}
function prioritytask() {
    todo=todo.unshift("позвонить маме");
}
function show() {
    console.log(todo)
}
rememberTo(tod1);
whatisnext(tod1);
prioritytask(tod1);
show(tod1);
