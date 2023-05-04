"use strict";
// using promise 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const objectpromise = () => {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        const data = { name: 'opu' };
        setTimeout(() => {
            if (data) {
                resolve(data);
            }
            else {
                reject('data not found');
            }
        }, 1000);
    });
};
const resolvedata = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield objectpromise();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
});
resolvedata();
// load data using json placeholder 
const getdata = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const res = yield fetch(url);
    return yield res.json();
});
const gettodo = () => __awaiter(void 0, void 0, void 0, function* () {
    // eikhane promise resolve hocce
    const result = yield getdata();
    console.log(result);
});
gettodo();
