import { BubbleSort } from "./SortStrategy/BubbleSort";
import { InsertionSort } from "./SortStrategy/InsertionSort";
import { Sorter } from "./SortStrategy/sorter";

const sorter = new Sorter(new BubbleSort())

console.log(sorter.sort([2,10,20,5,24]))

sorter.setStrategy(new InsertionSort())

console.log(sorter.sort([4,30,10,102,42,89]))