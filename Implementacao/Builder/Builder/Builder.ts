import { Address } from "../User/Address";
import { User } from "../User/User";

export class Builder {
    private user: User;

    constructor(name: string) {
        this.user = new User(name)
    }

    setAge(age: number) {
        this.user.age=age
        return this
    }

    setPhone(phone: number) {
        this.user.phone=phone
        return this
    }

    setAddress(address: Address) {
        this.user.address=address
        return this
    }

    build() {
        return this.user
    }
}