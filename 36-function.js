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



const greeting = (name,address)=>{
    let says = `Hello My Name is ${name} ${address}`;
    return says;
}

let result = greeting("FUJI TAUFUK", "Karawang");
console.log(result);
