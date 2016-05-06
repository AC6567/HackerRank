/* Day 09: Recursion

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/

//this test is passing locally but not on HackerRank currently//

function greatestCommonDivisor(a, b) {
   if (b == 0)
     return a;
   else
     return greatestCommonDivisor(b, a%b);
}

function processData(input) {
    var ar = input.split(' ').map(Number);
    console.log(greatestCommonDivisor(ar[0], ar[1]));
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
