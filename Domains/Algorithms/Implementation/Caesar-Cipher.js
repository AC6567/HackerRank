/*  Implementation - Caesar Cipher
HackerRank Algorithm Solutions by Perrin Clark
BlackGuyCoding@gmail.com
*/

// PROBLEM STATEMENT [Caesar Cipher](https://www.hackerrank.com/challenges/caesar-cipher):
// Julius Caesar protected his confidential information by encrypting it in a cipher. Caesar's cipher rotated every letter in a string by a fixed number, KK, making it unreadable by his enemies. Given a string, SS, and a number, KK, encrypt SS and print the resulting string.
//
// Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.
//
// Input Format
//
// The first line contains an integer, NN, which is the length of the unencrypted string.
// The second line contains the unencrypted string, SS.
// The third line contains the integer encryption key, KK, which is the number of letters to rotate.
//
// Constraints
// 1≤N≤1001≤N≤100
// 0≤K≤1000≤K≤100
// SS is a valid ASCII string and doesn't contain any spaces.
//
// Output Format
//
// For each test case, print the encoded string.
//
// Sample Input
//
// 11
// middle-Outz
// 2
// Sample Output
//
// okffng-Qwvb
// Explanation
//
// Each unencrypted letter is replaced with the letter occurring KK spaces after it when listed alphabetically. Think of the alphabet as being both case-sensitive and circular; if KK rotates past the end of the alphabet, it loops back to the beginning (i.e.: the letter after zz is aa, and the letter after ZZ is AA).
//
// Selected Examples:
// mm (ASCII 109) becomes oo (ASCII 111).
// ii (ASCII 105) becomes kk (ASCII 107).
// −− remains the same, as symbols are not encoded.
// OO (ASCII 79) becomes QQ (ASCII 81).
// zz (ASCII 122) becomes bb (ASCII 98); because zz is the last letter of the alphabet, aa (ASCII 97) is the next letter after it in lower-case rotation.
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
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());

}
'use strict';

const processData = input => {
    let lines = input.split('\n');
    let text = lines[1];
    let shift = parseInt(lines[2]);
    let encrypted = '';
    for(let i = 0; i < text.length; i++) {
        if(text.charCodeAt(i) >= 'a'.charCodeAt(0) && text.charCodeAt(i) <= 'z'.charCodeAt(0)) {
            encrypted += String.fromCharCode((text.charCodeAt(i) - 'a'.charCodeAt(0) + shift) % 26 + 'a'.charCodeAt(0))
        } else if(text.charCodeAt(i) >= 'A'.charCodeAt(0) && text.charCodeAt(i) <= 'Z'.charCodeAt(0)) {
            encrypted += String.fromCharCode((text.charCodeAt(i) - 'A'.charCodeAt(0) + shift) % 26 + 'A'.charCodeAt(0))
        } else {
            encrypted += text.charAt(i);
        }
    }
    console.log(encrypted);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));
