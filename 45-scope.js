/*

    Scope merupakan area akses sebuah data
    ada dua jenis scope yaitu global scope dan lokal scope
    Setiap membuat sebuah function  berarti kita membuat lokal scope
    Data di global scope bisa di ambil dalam lokal scope dan data lokal scope tidak bisa diakases di luar scope tersebut



*/



let counter = 0; //Global Scope

function hitMe(){
    //Local scope hitMe
     counter++;

}

hitMe()
console.log(counter);
console.log("===============================");


function first(){
    let firstScope = "First Scope";
    console.log(firstScope);
}

function second(){
    let secondScope = "Second Scope";
    console.log(secondScope);
}

first();
second();


//ERROR Karena ini adalah di localscope

//console.log(firstScope);
//console.log(secondScope);


console.log("===============================");


function firstNested(){
    let firstVariabel = "Ini First Variable";

    function firstIn(){
        console.log(firstVariabel);
    }
    firstIn();
}

firstNested();

