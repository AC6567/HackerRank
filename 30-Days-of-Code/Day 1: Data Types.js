/* Day 1: Data Types

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this code is not passing the case tests on the HackerRank system for some reason. Will update this later//

function processData(input) {
    //Enter your code here
    console.log('Primitive : double');
    console.log('Primitive : char');
    console.log('Primitive : boolean');
    console.log('Primitive : int');
    console.log('Referenced : String');
    console.log('Primitive : boolean');
    console.log('Primitive : double');
    console.log('Primitive : char');
    console.log('Referenced : String');
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
