/*

    Function didalam function disebut inner function
    Inner function hanya bisa di akses di tempat kita membuat functionnya dan tidak bisa
    dipanggil di luar functionnya

*/


function outer(){

    function innerSatu(){
        console.log("Inner Function Ke 1");
        
    }

    function innerDua(){
        console.log("Inner Function Ke 2");
        
    }

    innerSatu();
    innerSatu();
    innerDua();
}

outer();