export class MyIterator<T> implements Iterator<T> {
    private currentIndex = 0;
  
    constructor(private readonly items: T[]) {}
  
    public next(): { value: T, done: boolean } {
      if (this.currentIndex >= this.items.length) {
        return { value: null, done: true };
      }
  
      const value = this.items[this.currentIndex];
      this.currentIndex++;
  
      return { value, done: false };
    }
  }