import { MyIterator } from "./MyIterator";

export class MyIterable<T> implements Iterable<T> {
    constructor(private readonly items: T[]) {}
  
    [Symbol.iterator](): Iterator<T> {
      return new MyIterator(this.items);
    }
  }