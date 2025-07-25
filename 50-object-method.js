
//Function yang ada di dalam method

//Cara Pertama

// const person = {
//     name : "Fuji",
//     sayHello: function(name){
//         console.log(`Hello ${name}`);
        
//     }
// }
// person.sayHello("Taufik");



//Cara Kedua

const person = {
    firstName : "Fuji"
};

person.sayHello = function(lastName){
    console.log(`Hello My First Name is ${this.firstName} and My Last Name is${lastName}`);
    
}

person.sayHello("Rahman");


const orang = {
    nama : "Fuji"
};

function namaOrang(nama) {
    console.log(`Hallo Nama Saya ${orang.nama}`);
    
    
}

namaOrang("Fuji Taufik");