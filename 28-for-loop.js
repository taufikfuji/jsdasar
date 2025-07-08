/*

For adalah salah satu kunci yang biasa digunakan untuk perulangan
Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi

for(init statment;kondisi;post statement){
    //Block Perulangan
}

- init statment akan dieksekusi hanya sekali di awal sebelum perulangan
- Kondisi akan dilakukan pengecekan dalam setiap perulangan jika ture perluangan akan dilakukan jika false perlungan akan berhenti
- Post statement akan dieksekusi setiap kali akhir perulangan
- 

*/
let counter = 1;
for ( counter; counter <=10; counter ++ ){
    console.log(`Perulangan ${counter}`);
    
}