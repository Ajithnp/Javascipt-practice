// class creation
class Car {
    constructor(make,model){
        this.model = model,
        this.make = make
    }

    getInfo(){
        console.log(`${this.make} ${this.model}`)
    }
}

const carOne = new Car('toyota',2024)
carOne.getInfo()

// constructor function

function Constructor(name, place, designation){
    this.name= name,
    this.place = place,
    this.designation = designation,
    
    this.getInfo = function (){
        console.log(this.name+" "+ this.place+" "+this.designation);
        
    }
}

const person1 = new Constructor('ajith', 'banglore', 'software engeener')
person1.getInfo()