class subSystemA {
    method(A: string): string {
      return A;
    }
  }
  
  class subSystemB {
    method(B: number): number {
      return B;
    }
  }
  
  class subSystemC {
    method(C: { value:number[] }): {value: number[]} {
      return C;
    }
  }
  
  class Facade {
    subClassA(value): string{
      return new subSystemA().method(value);
    }
  
    subClassB(value: number): number{
      return new subSystemB().method(value);
    }
  
    subClassC(value: {value: number[]}): {value: number[]}{
      return new subSystemC().method(value);
    }
  }
  
  console.log(new subSystemA().method('A'))
  console.log(new subSystemB().method(2))
  console.log(new subSystemC().method({ value: [1, 2, 3] }))
  // or using the simplified facade instead
  const FACADE = new Facade()
  console.log(FACADE.subClassA('Z'))
  console.log(FACADE.subClassB(1))
  console.log(FACADE.subClassC({ value: [1, 2, 3] }))