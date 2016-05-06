/* Day 10: Binary Number

HackerRank 30 Days of Code by Perrin Clark
BlackGuyCoding@gmail.com
*/
function main() {
    var arr = [];
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var sum = Number.MIN_SAFE_INTEGER;
    for (var line = 0; line < 4; line++) {
        for (var col = 0; col < 4; col++) {
            var curr_sum = arr[line][col] + arr[line][col+1] + arr[line][col+2] + arr[line+1][col+1] + arr[line+2][col] + arr[line+2][col+1] + arr[line+2][col+2];
            if (curr_sum > sum)
                sum = curr_sum;
        }
    }

    console.log(sum);
}
