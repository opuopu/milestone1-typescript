"use strict";
class parents {
    constructor(name, age, sleep) {
        this.name = name;
        this.age = age;
        this.sleep = sleep;
    }
    makesleep(type) {
        return `the person ${this.name} and his type is ${type} he sleep ${this.sleep} hours `;
    }
}
class student extends parents {
    // constructor ke amader must call korte hobe and super keyword er modde parameter poss korte hobe
    constructor(name, age, sleep) {
        super(name, age, sleep);
    }
}
const student1 = new student('opu', 20, 8);
student1.makesleep(7);
// example 2 teacher 
class teacher extends parents {
    constructor(name, age, sleep, positon) {
        super(name, age, sleep);
        this.positon = positon;
    }
    makeclasses(hours) {
        console.log(`the person ${this.name} and his position ${this.positon} and he take class ${hours}`);
        return `the person ${this.name} and his position ${this.positon} and he take class ${hours}`;
    }
}
const teacher1 = new teacher('dulal sir', 40, 8, 'english teacher');
console.log(teacher1.makeclasses(10));
console.log(teacher1.makesleep(8));
