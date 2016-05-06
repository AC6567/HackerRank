var btn_result = document.getElementById("res");
var btn_zero = document.getElementById("btn0");
var btn_one = document.getElementById("btn1");
var btn_clear = document.getElementById("btnClr");
var btn_eql = document.getElementById("btnEql");
var btn_sum = document.getElementById("btnSum");
var btn_sub = document.getElementById("btnSub");
var btn_mul = document.getElementById("btnMul");
var btn_div = document.getElementById("btnDiv");

var current = 0; // + - * /
var first = '';
var second = '';
var firstGetd = false;

function zero () {
    btn_result.innerHTML = btn_result.innerHTML + '0';
    if (! firstGetd) {
        first += '0';
    } else {
        second += '0';
    }
}

function one () {
    btn_result.innerHTML = btn_result.innerHTML + '1';
    if (! firstGetd) {
        first += '1';
    } else {
        second += '1';
    }
}

function add () {
    firstGetd = true;
    btn_result.innerHTML = btn_result.innerHTML + '+';
    current = 1;
}

function sub () {
    firstGetd = true;
    btn_result.innerHTML = btn_result.innerHTML + '-';
    current = 2;
}

function mul () {
    firstGetd = true;
    btn_result.innerHTML = btn_result.innerHTML + '*';
    current = 3;
}

function div () {
    firstGetd = true;
    btn_result.innerHTML = btn_result.innerHTML + '/';
    current = 4;
}

btn_clear.onclick = function() {
    clear();
}

function clear () {
    btn_result.innerHTML = '';
    firstGetd = false;
    first = '';
    second = '';
}

function cal () {
    if (firstGetd === false || second.length === 0) return;

    var x = parseInt(first, 2);
    var y = parseInt(second, 2);
    switch (current) {
        case 1:
            btn_result.innerHTML = (x + y).toString(2);
            break;

        case 2:
            btn_result.innerHTML = (x - y).toString(2);
            break;

        case 3:
            btn_result.innerHTML = (x * y).toString(2);
            break;

        case 4:
            btn_result.innerHTML = (x / y >> 0).toString(2);
            break;
    }

    firstGetd = false;
    first = btn_result.innerHTML;
    second = '';
}
