/*

Operator OR (||) di Non Boolean
- Oprator logika OR(||), membaca dari kiri ke kanan
- Oparaor ini akan mengambil nilai pertama yang truthy
- Jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan di ambil

*/

console.log("Hello" || "");
console.log("" || []);
console.log("0" || "NOL");
console.log(null || "NULL");
console.log(undefined || "UNDEFINED");
console.log(0 || false);


const person = {
    firstName : "Fuji",
    lastName : "Taufik"
};

const names = person.firstName || person.lastName;
console.log(names);



console.log("" && []);
console.log("0" && "NOL");
console.log(null && "NULL");
console.log(undefined && "UNDEFINED");
console.log(0 && false);

