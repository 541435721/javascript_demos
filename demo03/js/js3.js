/**
 * Created by bxsh on 2016/4/11.
 */
(function () {
    function Man(name) {
        this._name = name;
    }

    Man.prototype = {
        say: function () {
            alert("man" + this._name);
        }
    }
    window.Man = Man;
}());

(function () {
    function Student(name) {
        this._name = name;
    }

    Student.prototype = new Man();
    var superSay = Student.prototype.say;
    Student.prototype = {
        say: function () {
            superSay.call(this);
            alert("Student" + this._name);
        }
    }
    window.Student = Student;
}());


var s = new Student("fuck");
s.say();