/*


Function generator adalah function yang digunakan untuk membuat data generator
generator adalah daya yang bisa di iterasi seperti Array
Untuk membuat function generator kita perlu menggunakan tanda *(bintang)setelah kata function
dan untuk mengembalikan data di taip iterasi, kita bisa gunakan kata kunci yoeuld diikuti datanya

*/

function* createNames(){
    yield "FUji";
    yield "Taufik";
}

const names = createNames();
for (const name of names) {
    console.log(name);
    
    
}


//Funtion Membuat Bilangan Ganjil dengan function generator
function* buatGanjil(value){
    
    for(let i=1; i <= value; i++){
        if(i %2 === 1){
            yield i;
        }
    }
}

const numbers = buatGanjil(100);
for (const number of numbers) {

    console.log(number);
    
    
}