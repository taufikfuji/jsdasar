// Destructering di Array
// const names = ["fuji","taufik","fahrul","rahman","ratna","ayu"];
// const [firstName,middleName,lastName, ...others] = names; // ...others adalah spreed operator

// console.log(firstName);
// console.log(middleName);
// console.log(lastName);
// console.log(others);



// Destructering di Object
// const person = {
//     firstName : "Fuji",
//     lastName : "Taufik",
//     address : {
//         street : "Jalan Wirasaba",
//         city: "Karawang",
//         country: "Indonesia"
//     },
//     hobby:"Games",
//     channel: "Ngobrol Unik"
// };

// const{firstName, lastName, address:{street,city,country}, ...others} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(street);
// console.log(city);
// console.log(country);
// console.log(others);


//Destructering di function parameter
{
    function displayPerson({firstName,middleName,lastName}){
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

const person = {
    firstName: "Ratna",
    middleName: "Ayu",
    lastName: "Hendrawaty"
};
displayPerson(person);

//Destructering di function array
function sum([first,second]){
    return first + second;

}

console.log(sum([1,5]));
console.log(sum([10,10]));

}

//Menggunakan nama variabel lain

const person = {
    firstName : "PUTRI",
    lastName : "RAHMAN"
};

let {
    firstName : namaDepan,
    lastName : namaBelakang
} = person;

console.log(namaDepan);
console.log(namaBelakang);

