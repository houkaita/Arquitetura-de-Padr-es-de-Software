import { Ann } from "../Personas/Ann";
import { Joker } from "../Personas/Joker";
import { Ryuiji } from "../Personas/Ryuiji";
import { Visitor } from "./IVisitor";

export class ThiefVisitor implements Visitor {
    visitJoker(joker: Joker): void {
        console.log(`${joker.getName()} is a Phantom Thief`)
    }

    visitAnn(ann: Ann): void {
        console.log(`${ann.getName()} is a Phantom Thief`)
    }

    visitRyuji(Ryuiji: Ryuiji): void {
        console.log(`${Ryuiji.getName()} is a Phantom Thief`)
    }
}