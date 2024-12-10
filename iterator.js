// array is an iterable object
var array = [10, 20, 30];

for (let el of array) {
    console.log(`${el}`);
}
// 10
// 20
// 30

for (let [idx, val] of array.entries()) {
    console.log(`[${idx}]: ${val}`);
}
// [0]: 10
// [1]: 20
// [2]: 30

var arrCopy = [...array];
console.log(arrCopy);

// string
var greeting = 'Hello world';

var chars = [...greeting];
console.log(chars);

// Map structure
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var buttonNames = new Map();

buttonNames.set(btn1, 'Button 1');
buttonNames.set(btn2, 'Button 2');
console.log(buttonNames);

for (let btn of buttonNames.values()) {
    console.log(btn);
}
// Button 1
// Button 2

for (let [btn, btnName] of buttonNames) {
    btn.addEventListener('click', function () {
        console.log(`Clicked ${btnName}`);
    });
}
