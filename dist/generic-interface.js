"use strict";
const crush1 = {
    value: 30,
    name: 'opu'
};
const crush2 = {
    value: 30,
    name: true
};
const sumofnumber = {
    value1: 10,
    value2: 20,
    sumofvalue(a, b) {
        this.value1 = a,
            this.value2 = b;
        return (a + b);
    }
};
console.log(sumofnumber.sumofvalue(20, 20));
