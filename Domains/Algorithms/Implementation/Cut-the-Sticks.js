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
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

}
'use strict';

const processData = input => {
    const lines = input.split('\n');
    let sticks = lines[1].split(' ').map(i => parseInt(i));
    while(sticks.length > 0) {
        console.log(sticks.length);
        sticks.sort((a, b) => a - b);
        const min = sticks[0];
        sticks = sticks.filter(i => i > min);
    }
};

process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));
