var array1 = "javaScript is the worlds most popular programming language JavaScript is the programming language of the Web.JavaScript is easy to learn.This tutorial will teach you JavaScript from basic to advanced.";
var array2 = [];
var count = 0;
var wpm;
var n = 0;
var err = 0;
var cal = 0;
var min = 0;
var se;
var inputs = document.getElementById('inp');

// *************************************************start interval for timer********************************************
function start() {
    if (n == 0) {

        se = setInterval(() => {
            if (count > 59) {
                count = 0;
                ++min;
                document.querySelector('.min').innerHTML = min;
            }
            count = count + 1;
            document.getElementById('p').innerHTML = count;
        }, 1000);
        n++;
    }

}
// ***********************************************checking of two strings ************************************************

function check() {
    var val = document.getElementById('inp').value;
    array2.push(val);
    var arraynew = array1.split();
    array3 = array2[array2.length - 1].split();
    console.log(array3.toString());
    if ((arraynew.toString().charAt(array3.toString().length - 1) != (array3.toString().charAt(array3.toString().length - 1)))) {
        document.getElementById('inp').style.color = 'red';
        document.getElementById('inp').style.border = " 8px solid red";
        cal = ((array1.length - err) / array1.length) * 100;
        err += 1;
    }
    else {
        var nod = document.createTextNode(array3.toString().charAt(array3.toString().length - 1));
        document.getElementById('inp').style.color = 'green';
        document.getElementById('inp').style.border = " 8px solid green";

    }

    if (array2[array2.length - 1].toString() == array1.toString()) {
        clear();
        show(cal);
    }

}

// **********************************************clear interval******************************************************************

function clear() {
    clearInterval(se);
}

// *****************************************display result**********************************************************************


function show(calc) {
    document.querySelector('#container1').style.display = "none";
    var wpm = (array1.length / count) * 60;
    console.log(cal);
    document.getElementById('msg').innerHTML = "your speed is: " + wpm.toFixed(2) + " words per minute";
    document.getElementById('acc').innerHTML = "accuracy is " + calc;
    document.getElementById('err').innerHTML = "error is " + err;
    document.querySelector('#but').style.display = "block";
}

// *****************************************show error**********************************************************************

function showerror() {
    if (array2[array2.length - 1].split().toString().charAt(array2.length - 1) != "  ") {

    }
}