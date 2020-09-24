// write a insertion sort algorithm based on the video shown in class.
// should take in an array, and sort it into ascending order using 
// insertion sorting logic

let arr1 = [4, 78, 54, 34, 2, 8, 45, 77, 99, 23, 567, 6, 7];

let arr2 = [56, 98, 65, 3, 4, 58, 68, 90, 12, 34, 45];


// const insertionSort = function(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let hozon = arr[i];
//         for ( let j = i - 1; j >= 0; j--) {
//             if (hozon > arr[j]) {
//                 arr[i] = arr[j];
//             }
//             arr[j + 1] = hozon
//         }
//     }
// };

const insertionSort = function(arr) {
    for (let i = 1; i < arr.length; i++) {
        let hozon = arr[i];
        let j = i
        while (j > 0 && arr[j - 1] > hozon) {
                arr[j] = arr[j - 1];
                arr[j - 1] = hozon;
                j -= 1;
        }
    }
    return arr
};

console.log(insertionSort(arr1));

console.log(insertionSort(arr2));