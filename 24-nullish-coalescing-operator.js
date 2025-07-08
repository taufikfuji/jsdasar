// Tanpa Nullish Coalescing Operator

let parameter = "Fuji";

let data = parameter;
if(data === undefined || data === null){
    data = "Nilai Default";
}

console.log(data);


// Dengan Nullish Coalescing Operator

data =  parameter ?? "Nilai Default";
console.log(data);