//方法装饰器实例

class Dog {
    @log
    run() {
        console.log('狗在跑');
    }
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const fun = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log('start', new Date());
        return fun.apply(this, args);
    }
}


const dog = new Dog();
dog.run();
