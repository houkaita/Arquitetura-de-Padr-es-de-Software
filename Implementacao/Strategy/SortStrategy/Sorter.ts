import { SortStrategy } from "./SortInterface";

export class Sorter {
    private strategy: SortStrategy
    
    constructor(strategy: SortStrategy) {
        this.strategy=strategy
    }

    setStrategy(strategy: SortStrategy) {
        this.strategy=strategy
    }

    sort(data:number[]): number[] {
        return this.strategy.sort(data)
    }
}