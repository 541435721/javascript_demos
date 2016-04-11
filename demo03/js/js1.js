/**
 * Created by bxsh on 2016/4/11.
 */

function sum() {
    var i = 10;
    var j = 10;
    var m = i + j;
    document.getElementById("sumid").innerHTML = m;
    document.getElementById("title").innerHTML = "add";
    var in1 = document.getElementById("input1").value;
    var in2 = document.getElementById("input2").value;
    document.getElementById("out").value = parseInt(in1) + parseInt(in2);
    var i = 2;
    switch (i) {
        case 1:
            document.write("1");
            break;
        case 2:
            document.write("2");
            break;
        case 3:
            document.write("3");
            break;
        case 4:
            document.write("4");
            break;
        default:
            document.write("-1");
            break;
    }

}
