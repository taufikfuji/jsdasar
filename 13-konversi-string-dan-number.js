/*

parseInt(string) = Mengkonversi dari string ke number (Bilangan bulat)
parseFloat(string) = Mengkonversi dari string ke number (bilangan pecahan)
Number(string) = Mengkonversi dari string ke number (bilangan bulat atau pecahan)
number.toString() = Mengkonversi dari number ke String
*/

const value1 = parseInt ("1");
const value2 = 1;
const sum = value1 + value2;

console.log(`Hasilnya : ${sum}`);

console.log(parseInt("1.1"));
console.log(parseFloat("1.1"));
console.log(Number("1.1"));

const a = 1;
const b = 1;
const total = a.toString()+b.toString();
console.log(total);


console.log(parseInt("10salah"));
console.log(parseFloat("1.1text"));
console.log(Number("1.1asdas"));

const firs = Number("salah");
const totalNumber = firs + 100;
console.log(totalNumber);

console.log(`${isNaN(Number)}, <===== Ini Bukan Number`);



