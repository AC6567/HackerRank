function processData(myArray) {
    var fst = -Number.MAX_VALUE;
    var snd = fst;
    myArray.forEach(function(num){
        if(num > fst){
            snd = fst;
            fst = num;
        }
        else if(num < fst)
            snd = Math.max(snd, num);
    });
    console.log(snd);
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
