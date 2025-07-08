/*

Tipe Data object adalah tipe data yang mirip dengan tipe data array
Yang membedakan adalah index pada tipe data object bisa menggunakan string
Index di object biasanya disebut dengan attributes atau properties bukan index

*/

// const person = {};

// //Menambah atau mengubah property/atribute
// person["nama"] = "Fuji Taufik";
// person["alamat"] = "Indonesia";
// person["umur"] = 30;

// console.table(person);

// //Menghapus
// delete person["umur"];

// console.table(person);

const orang = {
    nama : "Fuji",
    "nama lengkap" : "Fuji Taufik",
    alamat : "Jakarta",
    umur :30
};

//console.table(orang);
console.log(`Nama : ${orang.nama}`);
console.log(`Nama Lengkap : ${orang["nama lengkap"]}`);
console.log(`Alamat : ${orang.alamat}`);
console.log(`Umur : ${orang.umur}`);