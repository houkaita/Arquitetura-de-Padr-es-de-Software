import { SortStrategy } from "./SortInterface";

export class BubbleSort implements SortStrategy {
    sort(data: number[]): number[] {
        const len = data.length;

        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (data[j] > data[j + 1]) {
                    [data[j], data[j + 1]] = [data[j + 1], data[j]];
                }
            }
        }
        
        return data
    }
}