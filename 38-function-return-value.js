/*

FUNCTION RETURN VALUE
secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin kita bisa membuat sebuah function mengambalikan value
Agar function bisa menghasilkan value, kita bisa menggunkaan kata kunci RETURN di dalam function
Dan di dalam block function untuk menghasilkan nilai tersebut kita harus menggunakan kata kunci RETURN lalu diikuti denegan data yang igngin kita hasilkan
Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus kita bisa menggunakan array sebagai return valuenya


*/

// function sayHello (firsName, lastName){
//     const say = `Hello ${firsName} ${lastName}`;
//     return say;
// }

// const results = sayHello("Fuji","Taufik");
// console.log(results);

// function getFinalScore(value){
//     if(value >= 90) {
//         return "A";
//     }else if(value >= 80){
//         return "B";
//     }else if(value >= 70){
//         return "C";
//     }else if(value >= 60){
//         return "D";
//     }else{
//         return "E";
//     }
// }

// const finalValue = getFinalScore(50);
// console.log(finalValue);


function isContains(array, searchValue){
    for (const element of array) {

        console.log(`Iterasi Element ${element}`);
        
        if(element === searchValue){
            return true;
        }
        
    }
    return false;
}

const array = [1,221,11,2,54,21,4354,76,22,22,1123];
const searchValue = 11;
const found  = isContains(array, searchValue);
console.log(found);




