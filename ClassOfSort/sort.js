

let array = [1,3,8,9,2,4,5,6,7,0];
function sort(array) {
    for (let i = 1; i < array.length; ++i) {
        let x = array[i];//2
        let j = i;//4
        while (j > 0 && array[j - 1] > x) {
            array[j] = array[j - 1];
            //j = 4 [1,3,8,9,9,4,5,6,7,0];
            //j = 3 [1,3,8,8,9,4,5,6,7,0];
            //j = 2 [1,3,3,8,9,4,5,6,7,0];
            //j = 1 [1,2,3,8,9,4,5,6,7,0];
            --j;
        }
        array[j] = x;
    }
}

sort(array);
