import 'reflect-metadata';


class Post {
    @Prop
    name:String;
    constructor(name:String){
        this.name = name;
    }
}
function Prop(target: any, propertyKey: string){
    let type = Reflect.getMetadata('design:type', target, propertyKey);
    console.log(type);
}
