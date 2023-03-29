import { Human } from "./Character/Human";
import { Orc } from "./Character/Orc";
import { Shield } from "./Weapon/Shield";
import { Sword } from "./Weapon/Sword"

const lucas = new Human("Lucas");
const minhaEspada = new Sword(lucas)

const estadoBrasileiro = new Orc("Estado Brasileiro")
const escudoPatriota = new Shield(estadoBrasileiro)

minhaEspada.FastAtack(estadoBrasileiro)

minhaEspada.FastAtack(estadoBrasileiro)

minhaEspada.FastAtack(estadoBrasileiro)

minhaEspada.FastAtack(estadoBrasileiro)

escudoPatriota.Defend()

minhaEspada.StrongAtack(estadoBrasileiro)
minhaEspada.StrongAtack(estadoBrasileiro)
minhaEspada.StrongAtack(estadoBrasileiro)
minhaEspada.StrongAtack(estadoBrasileiro)
minhaEspada.StrongAtack(estadoBrasileiro)