var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};
var suma = 0;
for (var key in salaries) {
    suma += salaries[key];
}
alert(suma);


var salaries = {
    "Вася": 100,
    "Петя": 300,
    "Даша": 250
};

var maxSal = "";
var max = 0;
for (var key in salaries) {
    if (max < salaries[key]) {
        max = salaries[key];
        maxSal = key;
    }
}
alert(maxSal || "Нет сотрудников");


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

var menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

for (var key in menu) {
    if (isNumeric(menu[key])) {
        menu[key] *= 2;
    }
}
console.log(menu);


var numbers = [];
while (true) {
    var value = prompt("Paste next number array");
    if (value === "" || value === null || isNaN(value)) break;
    numbers.push(+value);
}
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
alert(sum);

arr = ["test", 2, 1.5, false];


function find(array, value) {
    if (array.indexOf) {
        return array.indexOf(value);
    }
    for (var i = 0; i < array.length; i++) {
        if (array[i] = value) return i;
    }
    return -1;
}
var arr = ["a", -1, 2, "b"];
var index = find(arr, "b");
alert(index);


function filterRange(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }
    }
    return result;
}
var arr = [5, 4, 3, 8, 0];
var filtered = filterRange(arr, 3, 5);
alert(filtered);


var arr = [];

for (var i = 2; i < 100; i++) {
    arr[i] = true
}
var p = 2;
do {
    for (i = 2 * p; i < 100; i += p) {
        arr[i] = false;
    }
    for (i = p + 1; i < 100; i++) {
        if (arr[i]) break;
    }
    p = i;
} while (p * p < 100);

var sum = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
        sum += i;
    }
}

alert(sum);


function getMaxSubSum(arr) {
    var maxSum = 0,
        partialSum = 0;
    for (var i = 0; i < arr.length; i++) {
        partialSum += arr[i];
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
alert(getMaxSubSum([-1, 2, 3, -9, 11]));
alert(getMaxSubSum([-2, -1, 1, 2]));
alert(getMaxSubSum([100, -9, 2, -3, 5]));
alert(getMaxSubSum([1, 2, 3]));
alert(getMaxSubSum([-1, -2, -3]));