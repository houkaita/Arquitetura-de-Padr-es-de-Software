export interface Observer {
    update(humidity: number, temperature: number, pressure: number): void;
}