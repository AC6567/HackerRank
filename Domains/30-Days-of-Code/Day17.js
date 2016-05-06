/* Day 17: More Exceptions

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this test is passing locally but now on HackerRank//

function Calculator() {
    this.power = function(n, p) {
        if (n >= 0 && p >= 0)
            return Math.pow(n, p);
        else
            throw(new Error("n and p should be non-negative").message);
    }
}
