/**
 * Created by bxsh on 2016/4/11.
 */
function bt2_click() {
    alert(r("11", "22"));

}
function r(a, b) {
    return a + b;
}

var person = {
    name: "name",
    age: 20,
    eat: function () {
        alert("eat");
    }
}
person.height = 100;

function bt3_click() {
    alert(person.age);
    alert(person.height);
    person.eat();
}

function Person() {

}
Person.prototype = {//声明原型量
    name: "name",
    age: 20,
    eat: function () {
        alert("eat2");
    }

}

function bt4_click() {
    var p = new Person();
    alert(p.age);
    alert(p.name);
    p.eat();
}

