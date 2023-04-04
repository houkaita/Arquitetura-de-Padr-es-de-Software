import { CaixaRegistradora } from "./Banco/CaixaReal";
import { Proxy } from "./Banco/Proxy";

const caixaReal = new CaixaRegistradora()
const proxy = new Proxy(caixaReal)

proxy.withdraw(1001)
proxy.withdraw(999)