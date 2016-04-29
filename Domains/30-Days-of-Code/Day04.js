/* Day 04: Class vs. Instance

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/

function Person(initial_Age){
    if (initial_Age<0){
        console.log('Age is not valid, setting age to 0.')
        initial_Age = 0;
    }
    this.age = initial_Age;
}
Person.prototype.amIOld = function() {
    if (this.age < 13)
        console.log('You are young.');
    else if (this.age < 18)
        console.log('You are a teenager.');
    else
        console.log('You are old.');
}

Person.prototype.yearPasses = function() {
    this.age++;
}
