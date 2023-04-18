import { MyIterable } from "./Iterator/MyIterable"

const iterable = new MyIterable([1, 2, 3]);
for (const item of iterable) {
  console.log(item);
}