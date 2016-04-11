/**
 * Created by bxsh on 2016/4/10.
 */
function A() {
    this.sayHehe = function () {
        console.log("hehe");
    }

}

A.prototype.sayHello = function () {
    console.log("hello js");
}
A.sayHi = function () {
    console.log("hi js");
}

var a = new A();
a.sayHello();
A.sayHi();

function B() {

}

B.prototype = new A();
var b = new B();
b.sayHello()
b.sayHehe();
