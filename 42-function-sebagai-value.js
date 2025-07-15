function sayHello(name){
    console.log(`Hello My Name is ${name}`);
    
}

const say = sayHello;
say("Fuji"); // Memanggil Funcction yang dimasukan ke dalam parameter
sayHello("Fuji"); // memanggil function langsung


function giveMeName(callback){
    callback("Taufik");
}

giveMeName(sayHello);