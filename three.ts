//访问器装饰器
function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}


let point = new Point(2, 3);
Object.defineProperty(Point.prototype, 'x', {
    configurable: true,
    enumerable: true,
    value: 5,
    writable: false
});
console.log(point.x);



