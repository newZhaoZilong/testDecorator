//属性装饰器
class Greeter {
    @observe
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {

    }
}


function observe(target: any, propertyKey: string) {
    console.log('haha');
}