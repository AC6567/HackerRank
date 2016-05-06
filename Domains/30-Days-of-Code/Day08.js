/* Day 08: Dictionaries and Maps

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/

//this test is passing locally but not on HackerRank currently//

function processData(input) {
    input = input.split('\n');
    var dictionary = new Object();
    var i = 1;
    for (; i<=2*input[0]; i+=2)
        dictionary[input[i]] = input[i+1];

    while (i<input.length){
        if (input[i] in dictionary)
            console.log(input[i]+'='+dictionary[input[i]]);
        else
            console.log('Not found');
        i++;
    }
}
