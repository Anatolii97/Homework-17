// Задача 1


// Площадь прямоугольника

// let s;

// function squareRectangle(a,b){
//     s = a*b;
//     return s;
// }
// console.log(squareRectangle(8,5));

// let squareRecTangle = function(a,b){
//     s = a*b;
//     return s;
// }
// console.log(squareRectangle(15,8));

// let squareRecTaNgle = (a,b) => a*b;
// console.log(squareRecTaNgle(16,7))


// Площадь Квадрата

// function squareSquare(a){
//     s = a**2;
//     return s;
// }
// console.log(squareSquare(8));

// let  squareSqUare = function(a){
//     s = a**2;
//     return s;
// }
// console.log(squareSqUare(15));

// let squareSqUaRe = (a) => a**2;
// console.log(squareSqUaRe(16))



// Задача 2

// let c;

// function theoremPythagorean(a,b){
//     c = a**2 + b**2;
//     return c;
// }
// console.log(theoremPythagorean(6,4))

// let theoremPyThagorean = function (a,b){
//     c = a**2 + b**2;
//     return c;
// }
// console.log(theoremPyThagorean(9,7))

// let theoremPyThaGorean = (a,b) => (a**2 + b**2);
// console.log(theoremPyThaGorean(14,8))



// Задача 3

// let D

// function discriminant(a,b,c){
//     D = b**2 - 4*a*c;
//     if (D < 0){
//         return false
//     } else{
//     return D;
// }
// }
// console.log('D = ' + discriminant(2,15,5))

// let diScriminant = function(a,b,c){
//     D = b**2 - 4*a*c;
//     if (D < 0){
//         return false
//     } else{
//     return D;
// }
// }
// console.log('D = ' + discriminant(5,12,3))

// let diScRiminant = (a,b,c) => {D = b**2 - 4*a*c; if (D < 0) {return false} else{return D;}}
// console.log('D = ' + diScRiminant(7,25,11))



// Задача 4

// function aRRay(){
// let arr = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0){
//     arr.push(i);
//     }
// } 
//     return arr
// }
// console.log(aRRay())

// let aRRAy = function(){
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         if (i % 2 === 0){
//         arr.push(i);
//         }
//     } 
//         return arr
//     }
//     console.log(aRRAy())

// let aRRAY = () => {let arr = []; for (let i = 0; i < 100; i++) {if (i % 2 === 0){arr.push(i);}} return arr}
// console.log(aRRAY())



// Задача 5

// function aRRay1(){
//     let arr = [];
//     for (let i = 0; i < 100; i++) {
//         if (i % 2 !== 0){
//         arr.push(i);
//         }
//     } 
//         return arr
//     }
//     console.log(aRRay1())
    
//     let aRRAy1 = function(){
//         let arr = [];
//         for (let i = 0; i < 100; i++) {
//             if (i % 2 !== 0){
//             arr.push(i);
//             }
//         } 
//             return arr
//         }
//         console.log(aRRAy1())
    
//     let aRRAY1 = () => {let arr = []; for (let i = 0; i < 100; i++) {if (i % 2 !== 0){arr.push(i);}} return arr}
//     console.log(aRRAY1())



// Задача 6

// function elevate(a,n){
//     return a**n;
// }
// console.log(elevate(4,5));

// let eLevate = function(a,n){
//     return a**n;
// }
// console.log(eLevate(6,3));

// let eLeVate = (a,n) =>  a**n;
// console.log(eLeVate(2,5));



// Задача 7

// let array = [44, 12, 11, 7, 1, 99, 43, 5, 69];
// let n;

// function numberSort(array,n) {
//     let arrayLength = array.length;
//     if (n === 'asc'){
//         for(let i = 0; i < arrayLength; i++) {
//             for(let j = i; j < arrayLength; j++) {
//                 if (array[i] > array[j]) {
//                     let temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }
//             }
//         }
//     return array
//     }

//     if (n === 'desc'){
//         for(let i = 0; i < arrayLength; i++) {
//             for(let j = i; j < arrayLength; j++) {
//                if (array[i] < array[j]) {
//                    let temp = array[i];
//                    array[i] = array[j];
//                    array[j] = temp;
//                }
//            }
//         }
//     return array
//     }

//   for(let i = 0; i < arrayLength; i++) {
//     for(let j = i; j < arrayLength; j++) {
//        if (array[i] > array[j]) {
//            let temp = array[i];
//            array[i] = array[j];
//            array[j] = temp;
//         }
//     }
//   }
// return array
// }
//     console.log(numberSort(array));  
//     console.log(numberSort(array,'asc'));
//     console.log(numberSort(array,'desc'));

// let numberSoRt =   function(array,n) {
//     let arrayLength = array.length;
//     if (n === 'asc'){
//         for(let i = 0; i < arrayLength; i++) {
//             for(let j = i; j < arrayLength; j++) {
//                 if (array[i] > array[j]) {
//                     let temp = array[i];
//                     array[i] = array[j];
//                     array[j] = temp;
//                 }
//             }
//         }
//     return array
//     }

//     if (n === 'desc'){
//         for(let i = 0; i < arrayLength; i++) {
//             for(let j = i; j < arrayLength; j++) {
//                if (array[i] < array[j]) {
//                    let temp = array[i];
//                    array[i] = array[j];
//                    array[j] = temp;
//                }
//            }
//         }
//     return array
//     }

//   for(let i = 0; i < arrayLength; i++) {
//     for(let j = i; j < arrayLength; j++) {
//        if (array[i] > array[j]) {
//            let temp = array[i];
//            array[i] = array[j];
//            array[j] = temp;
//         }
//     }
//   }
// return array
// }
//     console.log(numberSoRt(array));  
//     console.log(numberSoRt(array,'asc'));
//     console.log(numberSoRt(array,'desc'));

// let numberSoRT =  (array,n) => {let arrayLength = array.length;if (n === 'asc'){for(let i = 0; i <arrayLength; i++) {
//     for(let j = i; j <arrayLength; j++) {if (array[i] > array[j]) {let temp = array[i];
//     array[i] = array[j]; array[j] = temp;}}}return array}

//     if (n === 'desc'){for(let i = 0; i < arrayLength; i++) {
//         for(let j = i; j < arrayLength; j++) {if (array[i] < array[j]) {let temp = array[i];
//         array[i] = array[j]; array[j] = temp;}}}return array}

//     {for(let i = 0; i < arrayLength; i++) {
//     for(let j = i; j < arrayLength; j++) {if (array[i] > array[j]) {let temp = array[i];
//     array[i] = array[j]; array[j] = temp;}}}return array}}

// console.log(numberSoRT(array));  
// console.log(numberSoRT(array,'asc'));
// console.log(numberSoRT(array,'desc'));



// Задача 8

// let arr = [];

// let numbArray = function(arr,find){
//         for (let i = 0; i < 100; i++) {
//             arr.push(i);
//             if (arr[i] === find){
//             console.log('Вы выбрали число', arr[i], 'из предоставленного массива')
//             } 
//         } 
//             return arr
//         }
// console.log(numbArray(arr, 35))

// function numbARRay(arr,find){
//     for (let i = 0; i < 100; i++) {
//         arr.push(i);
//         if (arr[i] === find){
//         console.log('Вы выбрали число', arr[i], 'из предоставленного массива')
//         } 
//     } 
//     return arr
// }
// console.log(numbARRay(arr, 63))

// let numbARRAY = (arr,find) =>{for (let i = 0; i < 100; i++) {arr.push(i); if (arr[i] === find){
//         console.log('Вы выбрали число', arr[i], 'из предоставленного массива')}} 
//         return arr}
// console.log(numbARRAY(arr, 18))