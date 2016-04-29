/* Day 06: Let's Review

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this test is passing locally but not on HackerRank currently//

function main() {
    var n = parseInt(readLine());
    for (var i = 1; i<=n; i++)
        console.log(' '.repeat(n-i)+'#'.repeat(i));
}
