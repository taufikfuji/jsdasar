//Method di constructor Function

function Person(){
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name){
        console.log(`Hello ${name} my name ${this.firstName}`);
        
    }
}

const personSatu = new Person();
personSatu.firstName = "Fuji";
personSatu.lastName = "Taufik";
personSatu.sayHello("Rahman");

const personDua = new Person();
personDua.firstName = "Ayu";
personDua.lastName = "Taufik";
personDua.sayHello("Ratna");
