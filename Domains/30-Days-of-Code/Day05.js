/* Day 05: Loops

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this test is passing locally but not on HackerRank currently//
function processData(input) {
    input = input.split('\n');
    for (var i=1; i<input.length; i++){
        var inputN = input[i].split(' ');
        var a = parseInt(inputN[0]);
        var b = parseInt(inputN[1]);
        var n = parseInt(inputN[2]);
        var ans = a;
        var output = "";
        for (var j=0; j<n; j++){
            ans += Math.pow(2,j)*b;
            output += ans + ' ';
        }
        console.log(output);
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
