/*  Implementation - Library Fine
HackerRank Algorithm Solutions by Perrin Clark
BlackGuyCoding@gmail.com
*/

// PROBLEM STATEMENT [Library Fines](https://www.hackerrank.com/challenges/library-fine):
// Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:
//
// If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine=0)fine=0).
// If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine=15 Hackos × (the number of days late)fine=15 Hackos × (the number of days late).
// If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine=500 Hackos × (the number of months late)fine=500 Hackos × (the number of months late).
// If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos10000 Hackos.
// Input Format
//
// The first line contains 33 space-separated integers denoting the respective dayday, monthmonth, and yearyear on which the book was actually returned.
// The second line contains 33 space-separated integers denoting the respective dayday, monthmonth, and yearyear on which the book was expected to be returned (due date).
//
// Constraints
//
// 1≤D≤311≤D≤31
// 1≤M≤121≤M≤12
// 1≤Y≤30001≤Y≤3000
// It is guaranteed that the dates will be valid Gregorian calendar dates.It is guaranteed that the dates will be valid Gregorian calendar dates.
// Output Format
//
// Print a single integer denoting the library fine for the book received as input.
//
// Sample Input
//
// 9 6 2015
// 6 6 2015
// Sample Output
//
// 45
// Explanation
//
// Given the following return dates:
// Actual: Da=9,Ma=6,Ya=2015Da=9,Ma=6,Ya=2015
// Expected: De=6,Me=6,Ye=2015De=6,Me=6,Ye=2015
// Because Ye≡YaYe≡Ya, we know it is less than a year late.
// Because Me≡MaMe≡Ma, we know it's less than a month late.
// Because De<DaDe<Da, we know that it was returned late (but still within the same month and year).
//
// Per the library's fee structure, we know that our fine will be 15 Hackos × (# days late)15 Hackos × (# days late). We then print the result of 15×(Da−De)=15×(9−6)=4515×(Da−De)=15×(9−6)=45 as our output.
//

//SOLUTION

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
    var d1_temp = readLine().split(' ');
    var d1 = parseInt(d1_temp[0]);
    var m1 = parseInt(d1_temp[1]);
    var y1 = parseInt(d1_temp[2]);
    var d2_temp = readLine().split(' ');
    var d2 = parseInt(d2_temp[0]);
    var m2 = parseInt(d2_temp[1]);
    var y2 = parseInt(d2_temp[2]);

}
function processData(input) {
    var lines = input.split("\n");
    var actualDate = lines[0].split(" ");
    var expectedDate = lines[1].split(" ");

    var yearDiff = parseInt(actualDate[2]) - parseInt(expectedDate[2]);
    var monthDiff = parseInt(actualDate[1]) - parseInt(expectedDate[1]);
    var dayDiff = parseInt(actualDate[0]) - parseInt(expectedDate[0]);

    console.log(fee(yearDiff, monthDiff, dayDiff));
}

function fee(year, month, day)
{
    if(year > 0) return 10000;
    if(year == 0 && month > 0) return month * 500;
    if(year == 0 && month == 0 && day > 0) return day * 15;
    return 0;
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
