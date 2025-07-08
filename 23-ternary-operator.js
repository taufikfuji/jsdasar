/*

Ternary operator adalah operator sederhana dari if statemnet


*/


//Dengan IF ELSE stetment biasa
// const nilai = 80;
// let ucapan;

// if(nilai >= 75) {
//     ucapan = "Selamat Anda Lulus";
// }else{
//     ucapan = "Silahkan Coba Lagi";
// }


//Menggunakan Ternary Operator
const nilai = 75;
const ucapan = nilai >= 75 ? "Selamat Anda Lulus" : "Silahkan Coba Lagi";

console.log(ucapan);
