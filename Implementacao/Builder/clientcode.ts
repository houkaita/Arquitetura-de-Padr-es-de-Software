import { Builder } from "./Builder/Builder";
import { Address } from "./User/Address";

let user1 = new Builder('lucas').setAge(21).build()
console.log(user1)

let user2 = new Builder('Roberto').setPhone(11111111).build()
console.log(user2)

let user3 = new Builder('Jaiminho').setAddress(new Address(1111, 'Tangamandapio')).build()
console.log(user3)