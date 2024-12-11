//---example-1-------------------------
function greeting(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}!`);
    };
}

var hello = greeting('Hello');

var howdy = greeting('Howdy');

console.log(hello('Kyle'));
// Hello, Kyle!
console.log(hello('Sarah'));
// Hello, Sarah!
console.log(howdy('John'));
// Howdy, John!

//--example-2---------------------------
function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

var incBy1 = counter(1);
var incBy3 = counter(3);

console.log(incBy1()); // 1
console.log(incBy1()); // 2

console.log(incBy3()); // 3
console.log(incBy3()); // 6
console.log(incBy3()); // 9

//---example-3------------------------
var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');

var buttonNames = new Map();

buttonNames.set(btn1, 'Button 1');
buttonNames.set(btn2, 'Button 2');

for (let [btn, idx] of buttonNames.entries()) {
    btn.addEventListener('click', function onClick() {
        console.log(`Clicked button: ${idx}`);
    });
}
