
let arr = [4, 2, 5, 3, 1, 8, 10];
function SortingArray(arr) {
    let sorting
    do {
        sorting = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let hasil = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = hasil
                sorting = true
            }
        }
    } while (sorting);
}
// let sort = arr.length
// for (let i = 0; i < sort; i++) {
//     for (let j = i + 1; j < sort; i++) {
//         if (arr[i] >= arr[j + 1]) {
//             let hasil = arr[i]
//             arr[i] = arr[j + 1]
//             arr[j + 1] = hasil
//         }
//     }
// }
SortingArray(arr);
console.log(arr);

