/*

with statement merupakan fitur yang dugunakan untuk menurunkan sebuah scope data
dengan menggunakan with statement, kita bisa mengakses property dalam sebuah data tanpa harus menyebut datanya

with statement tidak direkomendasikan
hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu

*/



const person = {
    firstName : "Fuji",
    lastName : "Taufik"
};

//INI ADALAH CONTOH TANPA MENGGUNAKAN WITH STATEMENT
console.log(person.firstName);
console.log(person.lastName);



//INI MENGGUNAKAN WITH STATEMENT
with(person){
    console.log(person.firstName);
    console.log(person.lastName);
}




