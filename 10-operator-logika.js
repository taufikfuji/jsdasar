/* 
Operator logika adalah operator untuk dua buah data boolean
Hasil dari operator logika adalah operator boolean
&& Dan
|| Atau
! Kebalikan


*/

const nilaiUjian = 70;
const nilaiAbsensi = 70;

const lulusUjian = nilaiUjian >75 ;
const lulusAbsensi = nilaiAbsensi >75;

const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);


