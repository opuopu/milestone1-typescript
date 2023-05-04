"use strict";
const person = {
    name: "opu",
    data: [1, 2, 3, 4],
    age: 20
};
const mergeperson = (a, b) => {
    return a[b];
};
const values1 = mergeperson(Object.assign(Object.assign({}, person), { date: 20 }), 'date');
console.log(values1);
