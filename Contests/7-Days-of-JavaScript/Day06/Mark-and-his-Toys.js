function processData(input) {
    //Enter your code here
    var split = input.split("\n");
    var size = split[0].split(" ")[1];
    var my_array = split[1].split(" ").map(Number);
    my_array.sort(function(a,b){return a-b;});
    var cur_size = 0;
    var n = 0;
    for(var i = 0; i < my_array.length && cur_size <= size; i++){
        cur_size += my_array[i];
        n++;
    }
    console.log(n-1);
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
