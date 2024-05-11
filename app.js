// 1 variant

//  1
// function kesish(str, value) {
//     const index = str.indexOf(value);
//     if (index !== -1) {
//         return str.slice(0, index + value.length);
//     } else {
//         return str;
//     }
// }

// const str = 'ABABAB';
// const value = 'BA';
// const natija = kesish(str, value);
// console.log(natija); 



// 2
// function unbracketTag(str){
//    let text = str.split("<")
//      return text.join("")

// }

// console.log(unbracketTag('<a>'))



// //  3
// function tubson(n) {
//     if (n % 2 === 0 || n % 3 === 0) {
//         return false; 
//     }
//     return true;
// }
// console.log(tubson(4)); 
// console.log(tubson(5)); 


//  4  ishlolmadm lekn albatta organb olaman
// function group(array, keySelector, valueSelector) {

// }


//  5 
// let numbers = [2, 3, 4, 5, 6]

// const yigindi = numbers.reduce((acc, curVal) => {acc +=curVal; return acc;}, 0)
// console.log(yigindi)


// 6
// function takrorlanmas(arr) {
//     let result = [];
//     let son = [];

//     for (let i = 0; i < arr.length; i++) {
//         let sum = arr[i];
//         if (!son[sum]) {
//             result.push(sum);
//             son[sum] = true;
//         }
//     }

//     return result;
// }

// console.log(takrorlanmas([1, 2, 2, 3, 4, 4, 5, 1, 3])); 


//  7 shartiga yaxwi tuwunmadm albatta organb olaman.
// function qoshnilar(arr) {
//     let result = [];
//     let son = [];

//     for (let i = 0; i < arr.length; i++) {
//         let bloc = arr[i];
//         if (!son[bloc]) {
//             result.push(arr);
//             son[bloc] = true;
//         } else {
//             son[bloc] = false;
//         }
//         return result
//     }
// console.log(qoshnilar(arr))



// 8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let k = 2;
// let m = 5;
// function commit(arr, k, m) {
//     arr.splice(k, m - k + 1);

//     return {
//         count: arr.length,
//         elements: arr 
//     };
// }


// let result = commit(arr, k, m);
// console.log(result.count); 
// console.log(result.elements); 
