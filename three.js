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
//访问器装饰器
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        enumerable: false,
        configurable: true
    });
    __decorate([
        configurable(false),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Point.prototype, "x", null);
    __decorate([
        configurable(false),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Point.prototype, "y", null);
    return Point;
}());
var point = new Point(2, 3);
Object.defineProperty(Point.prototype, 'x', {
    configurable: true,
    enumerable: true,
    value: 5,
    writable: false
});
console.log(point.x);
