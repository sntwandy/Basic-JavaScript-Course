/* You write or register cars */
let cars = []

function car (brand, model, year) {
    this.brand = brand,
    this.model = model,
    this.year = year
}

const fillCars = () => {
    let carsNumbers = prompt('How many cars do you want to register?')
    for(let i = 0; i < carsNumbers; i++){
        let carBrand = prompt(`Write Car Brand ${i}`);
        let carModel = prompt(`Write Car Model ${i}`);
        let carYear = prompt(`Write Car Year ${i}`);
        let newCar = new car(carBrand, carModel, carYear)
        cars.push(newCar)
    }
}