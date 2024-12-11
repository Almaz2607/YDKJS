//---example-this--------------------
function classroom(teacher) {
    return function study() {
        console.log(`${teacher} says to study ${this.topic}`);
    };
}

var assignment = classroom('Kyle');
assignment();
// Kyle says to study undefined

var homework = {
    topic: 'JS',
    assignment: assignment,
};

homework.assignment();
// Kyle says to study JS

var otherHomework = {
    topic: 'Math',
};

assignment.call(otherHomework);
// Kyle says to study Math

//---example-prototype---------------
var subject = {
    topic: 'History',
};

var otherSubject = Object.create(subject);

console.log(subject.topic);
// History
console.log(otherSubject.topic);
// History

otherSubject.topic = 'Geometry';

console.log(otherSubject.topic);
// Geometry
console.log(subject.topic);
// History

//---again-about-for-this--------
var homeworks = {
    study() {
        console.log(`Please study ${this.topic}`);
    },
};

var jsHomework = Object.create(homeworks);
jsHomework.topic = 'JS';
jsHomework.study();
// Please study JS

var mathHomework = Object.create(homeworks);
mathHomework.topic = 'Mathematic';
mathHomework.study();
// Please study Mathematic
