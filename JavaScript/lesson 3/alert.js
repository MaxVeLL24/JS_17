// var hov = prompt("how much is 2+2?");
// switch (hov) {
//     case("4"):
//         alert("You are right");
//         break;
//     case ("3"):
//         alert("too small number");
//         break;
//     case ("5"):
//         alert("too big number");
//         break;
//     default:
//         alert("Wrong answer")
// }
// var i=20;
// var limit=("Enter limit");
// while (limit>=0){
// console.log(limit);
//     limit-=2;
// }

//
// var number=prompt("Enter number");
// var pow=prompt("Enter POW");
//
// var result=1;
// var i=0;
// while(i<pow){
//     result*=number;
//     i++;
// }
// console.log(result);


do {
    name = prompt("Enter your login name")
} while (name != "admin");

do {
    password = prompt("Enter your password")
} while (password != "123123");
alert("Hello,admin");

// var limit=prompt("Enter the limit");
// for(var i=0;i<limit;i+=2){
//     if (i%4!=0)
//         continue;
//         console.log(i);
// }

var limit = prompt("Enter the limit");
var flag=0;
for (var i = 1; i <= limit; i++) {
    for (var j = 2; j < i; j++) {
        if(i%j==0) {
            flag=1;
            continue;
        }
    }
    if(!flag){
        console.log(i);
    }
}
