/*
Array adalah tipe data yang berisikan kumpulan data
Array di javascript itu dinamis
urutan di array biasanya di sebut dengan index
index dimulai dari 0

array.push(value) (Menambahkan data ke array)
array.length (Untuk mendapatkan panjang array)
array[index] (Mendapatkan data di posisi indexz)
array[index] = value (Mengubah data posisi di index)
delete array[index] (menghapus data di posisi index, namun index tidak bergeser)
*/

// let arrayKosong = [];
// let arrayNama = ["Fuji","Taufik","Fahrul","Rahman"];

const names = [];
names.push("Fuji");
names.push("Taufik","Fahrul","Rahman");
names.push("Ratna","Ayu");

console.table(names);

console.info(names[0]);
console.info(names[1]);
console.info(names[2]);

names[3] = "Programmer";
console.table(names);

delete names[4];
console.table(names);

names.push("Ratna Lagi");

//array di dalam array
names.push(["Fuji","Taufik","Fahrul","Rahman"]);
console.table(names);