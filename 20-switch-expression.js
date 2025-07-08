/*

    Kondisi di switch statement hanya perbandingan sama dengan

*/

const nilai = "A";

switch(nilai){
    case "A":
        console.log("WOW ANDA LULUS DENGAN BAIK");
        break;

    case "B":
    case "C":
        console.log("ANDA LULUS");
        break;
        
    case "D":
        console.log("ANDA TIDAK LULUS");
        break;
    default:
        console.log("MUNGKIN ANDA SALAH JURUSAN");
        
}

