/* Day 02: Operators

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
function processData(input) {
    input = input.split("\n");
    M = input[0];
    T = input[1];
    X = input[2];
    tip = M*T/100;
    tax = M*X/100;
    P =  + M + tip + tax;
    console.log('The total meal cost is ' + Math.round(P) + ' dollars.')
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
