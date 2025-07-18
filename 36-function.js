/*

Function adalah blok kode program yang akan berjalan saat kita panggil
untuk membuat function kita bisa menggunakan kata kunci function, lalu diikuti dengan nama function, 
kurung () dan di akhiri dengan block kurung{}

Kita bisa memanggil function dengan menggunakan nama function lalu diikuti dengan ()

FUNCTION BISA DI PANGGIL BERKALI KALI

*/


// function sayHelloWorld(){
//     console.log("HELLO BRO");
    
// };

// sayHelloWorld();
// sayHelloWorld();



let inputUser = 100000;
let inputDiskon = 10;

function hitungDiskon(inputUser,inputDiskon) {

    let hitung = (inputUser * inputDiskon) / 100;
    let totalBayar = inputUser - hitung;
    return totalBayar;
    
}

let totalDiskon = hitungDiskon(inputUser,inputDiskon);
console.log(totalDiskon);
