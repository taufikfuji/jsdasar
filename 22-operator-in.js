// const person = {
//     firstName: "Fuji",
//     lastName: "Taufik"
// };

// if ("firstName" in person){
//     console.log(`Hello ${person.firstName}`);
// } else {
//     console.log("Hello");
// }


const student = {
    firstName: "Fuji",
    lastName: undefined
};

if("lastName" in student){
    console.log(`Hello ${student.lastName}`);
    
}else{
    console.log("HELLO");
    
}