/**
 * Created by bxsh on 2016/4/11.
 */
people = new Object();
people.name = "bb";
people.age = 18;

//document.write(people.name + "   " + people.age)

p = {
    name: "aa",
    age: 20
}
/*
 document.write(p.name + "   " + p.age)
 var str = "hello world";
 alert(str.length);
 alert(str.indexOf("hello"));
 alert(str.match("hello"));
 str = str.replace("world", "XMU");
 alert(str.toUpperCase());
 var arr = str.split(" ")
 document.write(arr[0]);
 */
var d = new Date();
document.write(d.getFullYear() + "<br>");
document.write(d.getTime());
