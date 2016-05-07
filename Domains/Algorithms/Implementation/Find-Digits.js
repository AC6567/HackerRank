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
        var n = parseInt(readLine());
    }

}
function processData(input) {
    var inputs = input.split('\n');
    var tests = parseInt(inputs[0]);

    for(var i = 0; i < tests; i++) {
        for(var j = 1; j < inputs.length; j++) {
            var result = 0;
            var num = parseInt(inputs[j]);
            for(var k = 0; k < inputs[j].length; k++) {
                var c = parseInt(inputs[j][k]);
                if(c > 0 && num % c === 0) {
                    result++;
                }
            }
            console.log(result);
        }
        return;
    }
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
