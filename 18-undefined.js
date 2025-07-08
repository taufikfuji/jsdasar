/*

undefined adalah sebuah kata kunci di javascript
undefined adalah sebuah tipe data
sebuah variable yang belum ditambahkan nilai maka artinya undefined

*/

// let names;
// if(names === undefined){
//     console.log("UNDEFINED");
// }else{
//     console.log("DEFINED");
    
// }

//undefined array value

const names = ["fuji","taufik"];

if(names[2] === undefined ){

    console.log("ARRAY UNDEFINDED");
    
}else{

    console.log("ARRAY DEFINED");
    
}


const person = {
    name : "FUji Taufik"
};

if(person.name === undefined){
    console.log("Object Undefined");
    
}else{
    console.log("Object Defined");
    
}