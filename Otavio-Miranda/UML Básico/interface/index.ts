export interface ControLeRemoto {
    play(): void;
    pause(): void;
}

export interface ControleSom extends ControLeRemoto {
    mudarRadio(): void;
}

export class Bluray implements ControLeRemoto {
    pause(): void {}
    play(): void{}
}

export class Som implements ControleSom {
    mudarRadio(): void {}
    pause(): void {}
    play(): void {}
}