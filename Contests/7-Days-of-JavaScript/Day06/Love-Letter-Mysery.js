function processData(input) {
    //Enter your code here
    var split = input.split("\n");
    for(var i = 1; i < split.length; i++){
        var count = 0;
        var str = split[i];
        for(var l = 0, r = str.length - 1; l < r; l++, r--){
            if(str[l] != str[r])    count += Math.abs(str.charCodeAt(l)-str.charCodeAt(r));
        }
        console.log(count);
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
