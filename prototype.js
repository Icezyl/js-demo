/**
 * - prototype : 原型
 * - __proto__ : 原型链 (链接点)
 * 
 * 
 * 从属关系
 * prototype -> 函数的一个属性：对象 {}
 * __proto__ -> 对象Object的一个属性: 对象 {}
 * 对象的__proto__保存者该对象的构造函数的prototype
 * 
 */

function Test() {

}

console.log(Test.prototype)