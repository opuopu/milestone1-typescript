"use strict";
// we must declare propertys on the top
class animal {
    // by default all propertys public thake
    // name:string
    // voice:string
    // parameter property dite hole argument er age public dite hobe
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
        this.name = name,
            this.voice = voice;
    }
    makesound() {
        console.log(`${this.name} and his sound ${this.voice}`);
    }
}
const dog = new animal('dog', 'geu geu');
dog.makesound();
const cat = new animal('cat', 'meu meu');
cat.makesound();
