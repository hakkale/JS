function intersection(arrays) {
    result = arrays.reduce((a, b) => a.filter(c => b.includes(c)));
    return result;

}
let array1 = [1, 2, 3, 9, 5];
let array2 = [2, 5, 7, 9 ,15];
let array3 = [8, 9, 15, 5, 10];
let arrays = [array1, array2, array3];
console.log(intersection(arrays));
