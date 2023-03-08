class Singleton {
    private static _instances: Singleton;
    private something: number = 0;
  
    private constructor() { }
  
    public static getIntance(): Singleton {
      return Singleton._instances || (this._instances = new this())
    }
  
    public increment() {
      this.something++;
      console.log(this.something);
    }
  }
  
  function Main() {
    const c1 = Singleton.getIntance();
    const c2 = Singleton.getIntance();
  
    c1.increment()
    c2.increment()
    c2.increment()
    c1.increment()
  }
  
  Main()