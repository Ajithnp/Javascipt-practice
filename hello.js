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


// pupe and impure function
function pure(a,b){
    return a+b
}
console.log(pure(5,4))
console.log(pure(5,4))
console.log(pure(5,4))
let sum = 0
function impure(a){
 sum += a
 return sum;
}
console.log(impure(5))
console.log(impure(5))
console.log(impure(5))


//factory function,
function factory(name, place, designation){
    return{
        name,
        place,
        designation
    }
}

const obj1 = factory('ajith','kochi', 'software engeener')
console.log(obj1)

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

