export interface GameComponent {
    play(): void;
    add(game: GameComponent): void;
    remove(game: GameComponent): void;
}