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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var t = parseInt(n_temp[1]);
    width = readLine().split(' ');
    width = width.map(Number);
    for(var a0 = 0; a0 < t; a0++){
        var i_temp = readLine().split(' ');
        var i = parseInt(i_temp[0]);
        var j = parseInt(i_temp[1]);
    }

}
function processData(input) {
    var lines = input.split('\n');
    var lanes = lines[1].split(' ').map(function(item) {return parseInt(item)});
    for(var i = 2; i < lines.length; i++) {
        var arr = lines[i].split(' ').map(function(item) {return parseInt(item)});
        console.log(findMin(lanes, arr[0], arr[1]));
    }
}

function findMin(arr, i, j) {
    var min = 10000000;
    for(var k = i; k <= j; k++) {
        if(arr[k] < min) {
            min = arr[k];
        }
    }
    return min;
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
