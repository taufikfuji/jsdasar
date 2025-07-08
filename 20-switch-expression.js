/*

    Kondisi di switch statement hanya perbandingan sama dengan

*/

const nilai = "E";

switch(nilai){
    case "A":
        console.log("Anda Lulus Dengan Baik");
        break;
    case "B":
    case "C":
        console.log("Anda Lulus");
        break;
    case "D":
        console.log("Anda Tidak Lulus");
        break;
    default:
        console.log("Mungkin Anda Salah Jurusan");
        
}
