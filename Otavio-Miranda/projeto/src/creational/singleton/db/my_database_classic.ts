export class MyDatabaseClassic {
    private static instance: MyDatabaseClassic | null = null;

    private constructor() { }

    public static getIntance(): MyDatabaseClassic {
        if(MyDatabaseClassic.instance===null) {
            MyDatabaseClassic.instance = new MyDatabaseClassic();
        }

        return MyDatabaseClassic.instance
    }
}

const db1 = MyDatabaseClassic.getIntance();
const db2 = MyDatabaseClassic.getIntance();
const db3 = MyDatabaseClassic.getIntance();

console.log(db1===db2)
console.log(db3===db2)