// // tek ededleri tap

// let arr = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35]

// function findOddNumbers() {

//     for (i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 1) {

//             console.log(arr[i])
//         }
//     }
// }
// findOddNumbers()

// //  Cut ededleri tap
// let arr = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35]

// function findEvenNumbers() {
    
//     for (i = 0; i < arr.length; i++) {

//         if (arr[i] % 2 == 0) {

//             console.log(arr[i])
//         }
//     }
// }
// findEvenNumbers()


// 2 reqemli ededleri tap
let arr = [1, 4, 56, 23, 67, 89, 145, 89, 200, 35];

function findTwoDigitNumbers() {
    
    for (i = 0; i < arr.length; i++) {

        if (arr[i] > 9 && arr[i] < 100) {

            console.log(arr[i]);
        }
    }
}
findTwoDigitNumbers()