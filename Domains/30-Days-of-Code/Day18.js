/* Day 18: Queues and Stacks

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
//this test is passing locally but now on HackerRank//

function Palindrome(){
    var stack = [];
    var q = [];

    this.pushCharacter = function(ch) {
        stack.push(ch);
    };

    this.enqueueCharacter = function(ch) {
        q.push(ch);
    };

    this.popCharacter = function() {
        return stack.pop();
    };

    this.dequeueCharacter = function() {
        return q.shift();
    };
}
