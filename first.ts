//类装饰器实例
import { Singleton } from './Singleton';
@Singleton
class Dog {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const dog1 = new Dog('yaofan');
const dog2 = new Dog('yaoxian');
console.log(dog1);
console.log(dog2);
