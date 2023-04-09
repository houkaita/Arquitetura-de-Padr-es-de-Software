import { Castle } from "./Level/castle";
import { ProgressTracker } from "./Memento/Caretaker";

const castle = new Castle(1);
const tracker = new ProgressTracker();

// O jogador vai para o level 2
castle.setFloor(2);
// O progresso do level foi salvo
tracker.addMemento(castle.createMemento());

// O jogador vai para o level 3
castle.setFloor(3);
// O progresso do level foi salvo
tracker.addMemento(castle.createMemento());

// O jogador quer voltar para o level 2
castle.restoreFromMemento(tracker.getMemento(0));
console.log(castle.getFloor()); 