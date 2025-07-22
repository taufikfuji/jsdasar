/*

    Recrusive function adalah kemampuan function untuk memanggil dirinya sendiri
    Kadang memang ada banyak problem yang lebih mudah untuk diselesaikan menggunakan recursive function
    contohnya adalah kasus factorial

*/



// Ini adalah dengan function dengan loop biasa
function factorial(value){
    let result = 1;
    for(let i = 1; i <= value; i++){
        result *= i;
    }

    return result;
}

console.log(factorial(7));



// Ini adalah dengan recrusive function
function factorialRecrusive(value){
    if(value === 1){
        return 1;
    }else{
        return value * factorialRecrusive(value - 1);
    }
}

console.log(factorialRecrusive(7));
