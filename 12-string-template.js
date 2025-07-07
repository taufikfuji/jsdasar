const Name = "Fuji";
const firstName = "Fuji Taufik";
const lastName = "Fahrul Rahman"
const template = `Name : ${firstName} ${lastName}`;
console.log(template);

const nilai = 80;
const template2 = `Name : ${Name}, Lulus : ${nilai >70}`;
console.log(template2);

const nilai2 = 80;
let hasil = "";

if(nilai2 >= 75){
    hasil = "Lulus";
}else{
    hasil = "Tidak Lulus";
}

console.log("Hasil  : " +  hasil);

