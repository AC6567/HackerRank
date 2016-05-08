/*  Implementation - Cavity Map
HackerRank Algorithm Solutions by Perrin Clark
BlackGuyCoding@gmail.com
*/

// PROBLEM STATEMENT [Cavity Map](https://www.hackerrank.com/challenges/cavity-map):
// 
// You are given a square map of size n×nn×n. Each cell of the map has a value denoting its depth. We will call a cell of the map a cavity if and only if this cell is not on the border of the map and each cell adjacent to it has strictly smaller depth. Two cells are adjacent if they have a common side (edge).
//
// You need to find all the cavities on the map and depict them with the uppercase character X.
//
// Input Format
//
// The first line contains an integer, nn, denoting the size of the map. Each of the following nn lines contains nn positive digits without spaces. Each digit (1-9) denotes the depth of the appropriate area.
//
// Constraints
// 1≤n≤1001≤n≤100
// Output Format
//
// Output nn lines, denoting the resulting map. Each cavity should be replaced with character X.
//
// Sample Input
//
// 4
// 1112
// 1912
// 1892
// 1234
// Sample Output
//
// 1112
// 1X12
// 18X2
// 1234
// Explanation
//
// The two cells with the depth of 9 fulfill all the conditions of the Cavity definition and have been replaced by X.

// SOLUTION

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
    var grid = [];
    for(var grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine();
    }

}

function processData(input) {
    var lines = input.split('\n');
    var n = parseInt(lines[0]);
    var result = lines[1] + "\n";
    for(var i = 2; i < lines.length - 1; i++) {
        result += lines[i][0];
        for(var j = 1; j < lines[i].length - 1; j++) {
            if(isCavity(lines, i, j)) {
                result += 'X'
            } else {
                result += lines[i][j];
            }
        }
        result += lines[i][n - 1];
        result += "\n";
    }
    if(n > 1) {
        result += lines[lines.length - 1];
    }
    console.log(result);
}

function isCavity(map, i, j) {
    var depth = parseInt(map[i][j], 10);
    if (depth <= parseInt(map[i - 1][j], 10)) {
        return false;
    }
    if (depth <= parseInt(map[i][j - 1], 10)) {
        return false;
    }
    if (depth <= parseInt(map[i + 1][j], 10)) {
        return false;
    }
    if (depth <= parseInt(map[i][j + 1], 10)) {
        return false;
    }
    return true;
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
