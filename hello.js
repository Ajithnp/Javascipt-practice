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