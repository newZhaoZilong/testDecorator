"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = exports.SINGLETON_KEY = void 0;
exports.SINGLETON_KEY = Symbol();
var Singleton = function (type) {
    return new Proxy(type, {
        // this will hijack the constructor
        construct: function (target, argsList, newTarget) {
            // we should skip the proxy for children of our target class
            if (target.prototype !== newTarget.prototype) {
                return Reflect.construct(target, argsList, newTarget);
            }
            // if our target class does not have an instance, create it
            if (!target[exports.SINGLETON_KEY]) {
                target[exports.SINGLETON_KEY] = Reflect.construct(target, argsList, newTarget);
            }
            // return the instance we created!
            return target[exports.SINGLETON_KEY];
        }
    });
};
exports.Singleton = Singleton;
