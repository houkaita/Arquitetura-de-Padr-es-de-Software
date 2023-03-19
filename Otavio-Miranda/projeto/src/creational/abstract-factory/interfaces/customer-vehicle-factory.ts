import { Customer } from "./customer";
import { Vehicle } from "./vehicle";

export interface CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customer: Customer): Vehicle;
}