import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random.numbers';
import { Car } from './vehicles/car'
import { Motocycle } from './vehicles/motocycle';

/*const fusca = new Car('Fusca');
fusca.pickUp('Joana');
fusca.stop();

const motinha = new Motocycle('Motinha')
motinha.pickUp('Joao')
motinha.stop()

const carFactory = new CarFactory()
const fusca = carFactory.getVehicle('fusca')
fusca.pickUp('joana')
fusca.stop();*/

const customerNames = ['Ana', "Joana", 'Helena', 'João']

for (let i = 0; i < 10; i++) {
    const vehicle = randomCarAlgorithm();
    const name = customerNames[randomNumbers(customerNames.length)]
    vehicle.pickUp(name);
    vehicle.stop();
    console.log('---')
}