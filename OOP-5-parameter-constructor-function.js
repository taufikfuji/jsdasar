function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name){
        console.log(`Hello ${name} My Name is ${this.firstName} ${this.lastName}`);
        
    }
}

const personSatu = new Person ("FUji","Taufik");
personSatu.sayHello("Rahman");


