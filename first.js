"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//类装饰器实例
var Singleton_1 = require("./Singleton");
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog = __decorate([
        Singleton_1.Singleton,
        __metadata("design:paramtypes", [String])
    ], Dog);
    return Dog;
}());
var dog1 = new Dog('yaofan');
var dog2 = new Dog('yaoxian');
console.log(dog1);
console.log(dog2);
