import { Human } from "./Character/Human";
import { Orc } from "./Character/Orc";
import { Shield } from "./Weapon/Shield";
import { Sword } from "./Weapon/Sword"

const lucas = new Human("Lucas", new Sword())
const estadoBrasileiro = new Orc('Estado Brasileiro', new Shield())

lucas.attack(estadoBrasileiro)
lucas.attack(estadoBrasileiro)
lucas.attack(estadoBrasileiro)
lucas.attack(estadoBrasileiro)