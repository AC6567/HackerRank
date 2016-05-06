var b1 = document.getElementById('btn1');
var b2 = document.getElementById('btn2');
var b3 = document.getElementById('btn3');
var b4 = document.getElementById('btn4');
var b5 = document.getElementById('btn5');
var b6 = document.getElementById('btn6');
var b7 = document.getElementById('btn7');
var b8 = document.getElementById('btn8');
var b9 = document.getElementById('btn9');

function add() {
    var temp1 = parseInt(b1.innerHTML);
    var temp2 = parseInt(b2.innerHTML);
    var temp3 = parseInt(b3.innerHTML);
    var temp4 = parseInt(b4.innerHTML);
    var temp6 = parseInt(b6.innerHTML);
    var temp7 = parseInt(b7.innerHTML);
    var temp8 = parseInt(b8.innerHTML);
    var temp9 = parseInt(b9.innerHTML);

    b1.innerHTML = temp4;
    b2.innerHTML = temp1;
    b3.innerHTML = temp2;
    b4.innerHTML = temp7;
    b6.innerHTML = temp3;
    b7.innerHTML = temp8;
    b8.innerHTML = temp9;
    b9.innerHTML = temp6;
}
