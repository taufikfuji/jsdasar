/*

Jika for in digunakan untuk melakukan iterasi property atau index, berbeda dengan for of
ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array , string dll
For Of tidak bisa digunakan untuk melakukan iterasi data di object karena object bukanlah iterable

*/

const names = ["Fuji","Taufik","Fahrul","Rahman"];
const address = ["Karawang","Jakarta","Bandung","Jogja"]

for (let i = 0; i < names.length; i++) {
    console.log(`Hello My Name is ${names[i]} and My Address ${address[i]}`);
    
}

for (const name of names){
    console.log(`${name}`);
    
}


const fullNme = "Fuji Taufik";
for (const charater of fullNme){
    console.log(`${charater}`);
    
}

names.forEach(name=> {
     console.log(name,"=====> Menggunakan Arrow Function dan Foreach");
    
})
console.log("====================================");

names.forEach((name,i)=>{
     console.log(`Hallo Nama Saya ${name} dan tinggal di ${address[i]} =====> Menggunakan Arrow Function dan Foreach `);
    
})
console.log("====================================");
names.forEach(function(name) {
    console.log(name,"=====> Menggunakan Function Declaration dan Foreach");
    
})


