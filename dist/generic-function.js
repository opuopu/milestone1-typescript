"use strict";
// arrow function
const mergearray = (a, b) => {
    return [a, b];
};
const invoked = mergearray(10, 10);
// console.log(invoked)
// object jehetu eikhane amra parameter ekta arrayt set korci ekhn just bole dite hobe array ta ki type er hobe
const mergeobject = (a, b) => {
    return {
        obj1: a,
        obj2: b
    };
};
const invoked2 = mergeobject([20, 40], [3, 29]);
console.log(invoked2);
