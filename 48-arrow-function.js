// const sayHello = (names) => {
//     const say = `Hello ${names}`;
//     console.log(say);
    
// }

// sayHello("Fuji");


 const sayHello = names => console.log(`Hello ${names}`);
 console.log("Fuji Taufik");
 

// const sum = (first, second) => {
//     return first + second;
// }
// console.log(sum(100,100));


const sum = (first, second) => first + second;
console.log(sum(100,50));



function giveMeName(callback){
    callback("Fuji Taufik Fahrukl Rahman");
}


// Anonymous Function
// giveMeName(function (name){
//     console.log(`Hello ${name}`);
// })

//Arrow Function
giveMeName((name) => console.log(`Hello ${name}`));

