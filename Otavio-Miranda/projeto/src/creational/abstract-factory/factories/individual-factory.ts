import { CreateVehicleCustomerFactory } from "../interfaces/customer-vehicle-factory";
import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";

export class CreateIndividualFactory implements CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }

    createVehicle(vehicleName: string, customer: Customer): Vehicle {
        return new IndividualCar(vehicleName, customer);
    }
}