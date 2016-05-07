/*  Implementation -
HackerRank Algorithm Solutions by Perrin Clark
BlackGuyCoding@gmail.com
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var c = parseInt(n_temp[1]);
        var m = parseInt(n_temp[2]);
    }

}
function processData(input) {
    var lines = input.split('\n');
    for(var i = 1; i < lines.length; i++) {
        var amounts = lines[i].split(' ').map(function(item) { return parseInt(item); });
        console.log(chocolates(amounts[0], amounts[1], amounts[2]));
    }
}

function chocolates(amount, price, discount) {
    var result = 0;
    var bought = parseInt(amount / price);
    result += bought;

    var wrappers = bought;
    while(wrappers >= discount) {
        var freeChoco = parseInt(wrappers / discount);
        result += freeChoco;
        wrappers = wrappers - freeChoco * discount + freeChoco;
    }
    return result;
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
