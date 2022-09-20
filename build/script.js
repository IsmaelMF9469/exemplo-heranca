"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'preto c/ verde');
function takeOff(animal) {
    animal.fly();
}
takeOff(duck);
function takeOff2(animal) {
    animal.swim();
}
takeOff2(duck);
function takeOff3(animal) {
    animal.walk();
}
takeOff3(duck);
