export interface Character {
    name: String;
    origin: String;
    age: number;

    FastAtack(): void;
    StrongAtack(): void;
    Defend(): void;
}