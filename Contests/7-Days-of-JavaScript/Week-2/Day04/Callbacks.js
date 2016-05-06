function myFilter(my_array, callback){
   var arr = [];
   for (var i = 0;i < my_array.length;i++) {
      if(callback(my_array[i])) {
           arr.push(my_array[i]);
    }
   }
   return arr;
}

function processData(inputArray) {
    console.log(myFilter(inputArray, function(ar) {
        if (ar%2 === 0) {
            return true;
        }
    }));
}
