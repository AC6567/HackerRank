/*  Implementation - Manasa and Stones
HackerRank Algorithm Solutions by Perrin Clark
BlackGuyCoding@gmail.com
*/

// PROBLEM STATEMENT [Manasa and Stones](https://www.hackerrank.com/challenges/manasa-and-stones):
//
// Manasa is out on a hike with friends. She finds a trail of stones with numbers on them. She starts following the trail and notices that two consecutive stones have a difference of either aa or bb. Legend has it that there is a treasure trove at the end of the trail and if Manasa can guess the value of the last stone, the treasure would be hers. Given that the number on the first stone was 00, find all the possible values for the number on the last stone.
//
// Note: The numbers on the stones are in increasing order.
//
// Input Format
// The first line contains an integer TT, i.e. the number of test cases. TT test cases follow; each has 3 lines. The first line contains nn (the number of stones). The second line contains aa, and the third line contains bb.
//
// Output Format
// Space-separated list of numbers which are the possible values of the last stone in increasing order.
//
// Constraints
// 1≤T≤101≤T≤10
// 1≤n,a,b≤1031≤n,a,b≤103
//
// Sample Input
//
// 2
// 3
// 1
// 2
// 4
// 10
// 100
// Sample Output
//
// 2 3 4
// 30 120 210 300
// Explanation
//
// All possible series for the first test case are given below:
//
// 0,1,2
// 0,1,3
// 0,2,3
// 0,2,4
// Hence the answer 2 3 4.
//
// Series with different number of final steps for second test case are the following:
//
// 0, 10, 20, 30
// 0, 10, 20, 120
// 0, 10, 110, 120
// 0, 10, 110, 210
// 0, 100, 110, 120
// 0, 100, 110, 210
// 0, 100, 200, 210
// 0, 100, 200, 300
// Hence the answer 30 120 210 300.

//SOLUTION

function processData(input) {
    var numbers = input.split("\n").map(function(i) {return parseInt(i); });
    var index = 0;
    var tests = numbers[index++];

    for(var i = 0; i < tests; i++) {
        var n = numbers[index++];
        var a = numbers[index++];
        var b = numbers[index++];
        var hashMap = {};
        hashMap[0] = 1;
        for(var j = 0; j < n - 1; j++) {
            var newHashMap = {};
            for(prop in hashMap) {
                if(hashMap.hasOwnProperty(prop)) {
                    var depth = hashMap[prop];
                    var newA = parseInt(prop) + a;
                    var newB = parseInt(prop) + b;
                    var newDepth = depth + 1;
                    newHashMap[newA] = newDepth;
                    newHashMap[newB] = newDepth;
                }
            }
            hashMap = newHashMap;
        }

        var res = [];
        for(p in hashMap) {
            if(hashMap.hasOwnProperty(p)) {
                res.push(parseInt(p));
            }
        }

        console.log(res.join(" "));
    }
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
