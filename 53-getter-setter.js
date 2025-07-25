const person = {

    firstName : "Fuji",
    lastName : "Taufik",
    get fullName (){
        return `Hello My Name is ${this.firstName} ${this.lastName}`;
        
    },
    set fullName(value){
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];

    }
}


person.fullName = "Fahrul Rahman"
console.log(person.fullName);



person.fullName = "Ratna Ayu"
console.log(person.fullName);
