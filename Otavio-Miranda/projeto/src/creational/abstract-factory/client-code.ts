import { CreateEnterpriseFactory } from "./factories/enterprise-factory"
import { CreateIndividualFactory } from "./factories/individual-factory";

const enterpriseFactory = new CreateEnterpriseFactory();
const individualFactory = new CreateIndividualFactory();

const client1 = enterpriseFactory.createCustomer('Joao')
const client2 = individualFactory.createCustomer('Helena')
const car1 = enterpriseFactory.createVehicle('Celtinha Tunado', client1)
const car2 = individualFactory.createVehicle('Fusca Brabo', client2)

car1.pickUp();
car2.pickUp();