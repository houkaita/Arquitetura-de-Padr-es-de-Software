import { SortStrategy } from "./SortInterface";

export class InsertionSort implements SortStrategy {
    sort(data: number[]): number[] {
        let n = data.length;
        for (let i = 1; i < n; i++) {
            let current = data[i];
            let j = i-1; 
            while ((j > -1) && (current < data[j])) {
                data[j+1] = data[j];
                j--;
            }
            data[j+1] = current;
        }
        
        return data
    }
}