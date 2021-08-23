// Задача 1

let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];
let arrayLength = arr.length;
let i = 0;
let j = arrayLength-1;
let temp;
 
for(i,j; i<j; i++,j--){
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
console.log(arr)

// Задача 2

// let arr = [44, 12, 11, 7, 1, 99, 43, 5, 69];
// let arrayLength = arr.length;
// let i = 0;
// let j = arrayLength-1;
// let temp;
 
// for(i,j; i<j; i++,j--){
//     temp = arr[j];
//     arr[j] = arr[i];
//     arr[i] = temp;
// }
// console.log(arr)



// Задача 3

// let str = 'Hi I am ALex'
// let strRev = "";
// let strLength = str.length;

// for (i = strLength-1; i >= 0; i--) {
//   strRev += str[i];
// }
// console.log(strRev);



// Задача 4

// let str = 'Hi I am ALex'

// function lowerRegister(str) {
//     let strLength = str.length;
//   let new_str = "";
//     for (let i = 0; i < strLength; i++) {
//         new_str += str[i].toLowerCase();
//     }
//     return new_str;
//   }
//   console.log(lowerRegister(str));



// Задача 5

// let str = 'Hi I am ALex'

// function upperRegister(str) {
//   let strLength = str.length;
//   let new_str = "";
//     for (let i = 0; i < strLength; i++) {
//         new_str += str[i].toUpperCase();
//     }
//     return new_str;
//   }
//   console.log(upperRegister(str));



// Задача 6

// let str = 'Hi I am ALex'
// let strRev = "";
// let strLength = str.length;

// for (i = strLength-1; i >= 0; i--) {
//   strRev += str[i];
// }
// console.log(strRev);



// Задача 7

// let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];
// let arrayLength = arr.length;

// for (let i = 0; i < arrayLength; i++) {
//   arr[i] = arr[i].toLowerCase();
// }
// console.log(arr)



// Задача 8

// let arr = ['Alex', 'Vanya', 'Tanya', 'Lena', 'Tolya'];
// let arrayLength = arr.length;

// for (let i = 0; i < arrayLength; i++) {
//   arr[i] = arr[i].toUpperCase();
// }
// console.log(arr)



// Задача 9

// let num = 1234678;
// let new_num = 0;

// for(num; num; num = Math.floor(num / 10)) {
//   new_num *= 10;
//   new_num += num % 10;
// }
// console.log(new_num);

// function getReversedNum(num) {
//   let result = 0;
//   while (num) {
//     result = result * 10 + num % 10;
//     num = Math.floor(num / 10);
//   }
//   return result;
// }
// console.log(getReversedNum(num));



// Задача 10

// let array = [44, 12, 11, 7, 1, 99, 43, 5, 69];

// function dscSort(array) {
//     let arrayLength = array.length;
//     for(let i = 0; i < arrayLength; i++) {
//         for(let j = i; j < arrayLength; j++) {
//            if (array[i] < array[j]) {
//                let temp = array[i];
//                array[i] = array[j];
//                array[j] = temp;
//            }
//        }
//     }
//    return array
// }
// console.log(dscSort(array));