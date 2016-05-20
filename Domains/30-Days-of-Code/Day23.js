/* Day 23: BST Level-Order Traversal
HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/

//PROBLEM

// // Objective
// Today, we're going further with Binary Search Trees. Check out the Tutorial tab for learning materials and an instructional video!
//
// Task
// A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, , pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.
//
// Hint: You'll find a queue helpful in completing this challenge.
//
// Input Format
//
// The locked stub code in your editor reads the following inputs and assembles them into a BST:
// The first line contains an integer,  (the number of test cases).
// The  subsequent lines each contain an integer, , denoting the value of an element that must be added to the BST.
//
// Output Format
//
// Print the  value of each node in the tree's level-order traversal as a single line of  space-separated integers.
//
// Sample Input
//
// 6
// 3
// 5
// 4
// 7
// 2
// 1
// Sample Output
//
// 3 2 5 1 4 7
// Explanation
//
// The input forms the following binary search tree:
// See image BST.png [here] (https://s3.amazonaws.com/hr-challenge-images/17176/1461696188-8eddd12300-BST.png)
//
// We traverse each level of the tree from the root downward, and we process the nodes at each level from left to right. The resulting level-order traversal is , and we print these data values as a single line of space-separated integers.

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function(root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }

        return this.root;
    };

    // Start of function levelOrder
    this.levelOrder = function(root) {

      // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')
 var queue = [];
        queue.push(root)
        while (Object.keys(queue).length){
            var node = queue.shift();
            process.stdout.write(node.data + ' ');
            if (node.left)
                queue.push(node.left);
            if (node.right)
                queue.push(node.right);
        }

     }; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
_input += data;
});

process.stdin.on('end', function () {
var tree = new BinarySearchTree();
var root = null;

var values = _input.split('\n').map(Number);

for (var i = 1; i < values.length; i++) {
     root = tree.insert(root, values[i]);
}

tree.levelOrder(root);
});