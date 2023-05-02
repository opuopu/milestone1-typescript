"use strict";
var level;
(function (level) {
    level[level["junior"] = 0] = "junior";
    level[level["mid"] = 1] = "mid";
    level[level["high"] = 2] = "high";
})(level || (level = {}));
// enum 
const developer = {
    name: 'opu',
    expertise: 'true',
    salary: 2000,
    level: level.high
};
