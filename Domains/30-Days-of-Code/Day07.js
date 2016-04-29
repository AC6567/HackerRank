/* Day 07: Arrays

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/

//this test is passing locally but not on HackerRank currently//

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    arr.reverse();
    arr = arr.join(' ');
    console.log(arr);
}
