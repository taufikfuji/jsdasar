/*

Parametar adalah optional artinya kita bisa tidak memeri value terhadap parameter
Parametaer juga bisa kita beri default value, artinya jika ketika kita tidak mengirim data ke parameter
atau kita mengirim data undefinded, maka secara otomatis parameter akan diisi oleh defulat valuenya

*/


function register(name, gender = "UKNOWN"){
    console.log(name);
    console.log(gender);
}

register();
register ("FUJI", "MALE");
register ("FUJI");
