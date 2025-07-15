//anonyous function di masukan ke dalam variable

let say = function (nama){
    console.log(`Helo Nama Saya ${nama}`);
    
}

say("Fuji");
say("Taufik");



//anonymous function di masukan ke dalam parameter

function giveMeName(callback){

    callback("Fuji");
    
}

giveMeName(function(nama){
    console.log(`Hai Saya ${nama}`);
    
});