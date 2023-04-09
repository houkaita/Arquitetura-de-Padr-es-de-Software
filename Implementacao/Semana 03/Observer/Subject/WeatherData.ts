import { Observer } from "../Observers-object/observerInterface";
import { Subject } from "./SubjectInterface";

export class WeatherData implements Subject {
    private observers: Observer[]
    private temperature: number;
    private humidity: number;
    private pressure: number;
    
    constructor() {
        this.observers = [];
    }

    registerObserver(observer: Observer): void {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer)
        if(index >= 0) {
            this.observers.splice(index, 1)
        }
    }

    notifyObservers(): void {
        for(const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure)
        }
    }

    /*measurementChaged(): void {
        this.notifyObservers();
    }*/

    setMeasurments(temperature: number, humidity: number, pressure: number) {
        this.humidity=humidity
        this.temperature=temperature
        this.pressure=pressure
        this.notifyObservers();
    }
}