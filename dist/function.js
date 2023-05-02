"use strict";
// number type arrow function return a number
const sumofnumber = (a, b) => {
    return a + b;
};
console.log(sumofnumber(5, 5));
const persons = {
    name: "opu",
    age: 15,
    salary: 2000,
    totalSalary(s) {
        return this.salary + s;
    }
};
// spread operator 
const friends = ['opu', 'akhi', 'niloy'];
const newfriends = ['doctor', 'silgala'];
friends.push(...newfriends);
console.log(friends);
