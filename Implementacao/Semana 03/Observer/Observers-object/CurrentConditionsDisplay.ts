import { Subject } from "../Subject/SubjectInterface";
import { Observer } from "./observerInterface";

export class CurrentConditionsDisplay implements Observer {
    private temperature: number;
    private humidity: number;
    private preassure: number;
    private weatherData: Subject; 
    
    constructor(weatherData:Subject) {
        this.weatherData=weatherData;
        weatherData.registerObserver(this)
    }

    private display() {
        console.log(`Condições atuais: ${this.temperature} graus celcius, ${this.humidity}% de humidade e ${this.preassure} de pressão`)
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature=temperature
        this.humidity=humidity
        this.preassure=pressure
        this.display()
    }
}