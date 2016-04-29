var n = 0;

function processData(input) {
    //Enter your code here
    var s = input.split("\n");
    var m = Number(s[0]);
    var n = Number(s[1]);
    var matrix = Array();
    var cur = 2;
    //some error when mapping arrays.
    while(m - matrix.push(s[cur].split(" ").map(Number)) > 0) { cur++; }
    var visited = Array();
    for(var i = 0; i < m-2; i++)    visited.push(matrix[i].map(a => false));
    var max = 0;
    for(var i = 0; i < matrix.length; i++){
        for(var j = 0; j < matrix[0].length; i++){
            n = 0;
            dfs(matrix, visited, i, j);
            if(matrix[i][j] == 1 && !visited[i][j]) max = Math.max(max, n);
        }
    }
    return max;
}
function dfs(matrix, visited, i, j){
    if(visited[i][j] || matrix[i][j] != 1)  return;
    n++;
    visited[i][j] = true;
    if(i > 0)   dfs(matrix, visited, i-1, j);
    if(j > 0)   dfs(matrix, visited, i, j-1);
    if(i < matrix.length-1) dfs(matrix, visited, i+1, j);
    if(j < matrix[0].length-1) dfs(matrix, visited, i, j+1);
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
