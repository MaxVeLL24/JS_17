var arr = ['There', 'is', 'life', 'on', 'Marce'];
var arrLenght = arr.map(function (item) {
    return item.length;
});
console.log(arrLenght);

var getSum=[1,2,3,4,5];
var result=getSum.reduce(function (current,last) {
    return current
});
