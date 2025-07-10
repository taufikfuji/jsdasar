/*

Jika for in digunakan untuk melakukan iterasi property atau index, berbeda dengan for of
ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array , string dll
For Of tidak bisa digunakan untuk melakukan iterasi data di object karena object bukanlah iterable

*/

const names = ["Fuji","Taufik","Fahrul","Rahman"];

for (const name of names){
    console.log(`${name}`);
    
}

const fullNme = "Fuji Taufik";
for (const charater of fullNme){
    console.log(`${charater}`);
    
}