/*

for in merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index array
walaupun for ini  bisa digunakank untuk array, namun tidak direkomendasikan untuk array, karena biasanya kita jarang
sekali butuh data untuk array, kita bisa menggunakan for of

*/


const person = {
    firstName : "Fuji",
    lastName : "Taufik"
};

for (const property in person){
    console.log(` ${property} : ${person[property]}`);
    
}

//for in juga bisa digunakan di array

const names = ["fuji","taufik","fahrul","rahman"];
for (const index in names){
    console.log(`${index} : ${names[index]}`);
    
}