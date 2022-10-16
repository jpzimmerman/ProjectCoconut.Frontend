"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MenuItem(target) {
    target.prototype.id = 'asdf';
    target.prototype.alias = 'oqpiweuropiwqer';
    target.prototype.cost = 5.50;
}
let Pizza = class Pizza {
    constructor() {
        this.id = 'oiuoiuret',
            this.alias = 'm,nxcvkbhkjhkjhdsfg',
            this.cost = 14.99;
    }
};
Pizza = __decorate([
    MenuItem
], Pizza);
class Hamburger {
    constructor() {
        this.id = '';
    }
}
console.log(new Pizza().cost);
