import { ICat } from "../Interface/ICat";

export class Cat implements ICat {
    purr(): void {
        console.log('Purrrr....')
    }
    
    sleep(): void {
        console.log('Zzzz....')
    }
    
    playWithBall(): void {
        console.log("Cant't talk right now, playing with my ball")
    }
}