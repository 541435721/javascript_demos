/**
 * Created by bxsh on 2016/4/11.
 */

(function () {
    function Men() {
        var _this = {}
        _this.sayHello = function () {
            alert("hello");

        }
        return _this;
    }

    window.Men = Men;
}());

(function () {
    function Teacher() {
        var _this = Men();
        return _this;
    }

    window.Teacher = Teacher;
}());


var t = new Teacher();
t.sayHello();