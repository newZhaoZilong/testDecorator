/**
 * 装饰器通用写法
 * @param {*} callback 需要装饰的函数
 * @returns 返回一个新函数
 */
function decorator(callback) {
    return function (...params) {
        //do something
        const result = callback.apply(this, params);//设置this上下文,并传递参数
        //do something
        return result;
    }
}

function run() {
    console.log('我正在跑步');
}

function eat(food) {
    console.log(`我正在吃${food}`);
}

/**
 * 使用装饰器完成一个打印动作开始时间的功能
 */
function timeDecorator(callback) {
    return function (...params) {
        console.log('start time====>', new Date());
        const result = callback.apply(this, params);
        console.log('end time====>', new Date());
        return result;
    }
}
//对原函数进行装饰
run = timeDecorator(run);
eat = timeDecorator(eat);

run();
eat('面包');

