'use strict';

const marks = [5, 4, 6, 7, 9];
const addOne = mark => (mark+1);
const inflatedMarks = marks.map(addOne);

console.log(inflatedMarks);
