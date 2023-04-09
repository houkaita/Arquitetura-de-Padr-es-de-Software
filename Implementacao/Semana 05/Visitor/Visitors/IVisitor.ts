import { Ann } from "../Personas/Ann";
import { Joker } from "../Personas/Joker";
import { Ryuiji } from "../Personas/Ryuiji";

export interface Visitor {
    visitJoker(joker: Joker): void;
    visitAnn(ann: Ann): void;
    visitRyuji(Ryuiji: Ryuiji): void;
}