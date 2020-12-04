var array1 = "this is your typing test";
var array2 = [];
var count = 0;
var wpm;
var n = 0;
var err = 0;
var cal = 0;
var se;
var inputs = document.getElementById('inp');

function start() {
    if (n == 0) {

        se = setInterval(() => {
            count = count + 1;
            document.getElementById('p').innerHTML = "timer: " + count;
        }, 1000);
        n++;
    }

}

function check() {
    var val = document.getElementById('inp').value;
    array2.push(val);
    var arraynew = array1.split();
    array3 = array2[array2.length - 1].split();
    console.log(array3.toString());
    if ((arraynew.toString().charAt(array3.toString().length - 1) != (array3.toString().charAt(array3.toString().length - 1)))) {
        document.getElementById('inp').style.color = 'red';
        // console.log((array3.toString().charAt(array3.toString().length - 1)));
        // console.log(array3.toString().indexOf(array3.toString().charAt(array3.toString().length - 1)))
         cal = Math.round(((array3.toString().length - err) / array3.toString().length) * 100);
        console.log(cal);
        err += 1;
        // console.log(err);
    }
    else {

        document.getElementById('inp').style.color = 'green';
    }



    if (array2[array2.length - 1].toString() == array1.toString()) {
        clear();
        show(cal);
    }

}
function clear() {
    clearInterval(se);
}
function show(calc) {
    document.querySelector('#container1').style.display = "none";
    var wpm = (5 / count);
    console.log(cal);
    document.getElementById('msg').innerHTML = "your speed is: " + wpm.toFixed(2) + " words per minute";
    document.getElementById('acc').innerHTML= "accuracy is " + calc;
    document.getElementById('err').innerHTML="error is "+err;
    document.querySelector('#but').style.display = "block";
}
function showerror() {
    if (array2[array2.length - 1].split().toString().charAt(array2.length - 1) != "  ") {
        // document.getElementById('error').innerHTML = "error is: " + array2[array2.length - 1].split().toString().charAt(array2.length - 1);
    }
}