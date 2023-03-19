import { CreateVehicleCustomerFactory } from "../interfaces/customer-vehicle-factory";
import { Customer } from "../interfaces/customer";
import { Vehicle } from "../interfaces/vehicle";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";

export class CreateEnterpriseFactory implements CreateVehicleCustomerFactory {
    createCustomer(customerName: string): Customer {
        return new EnterpriseCustomer(customerName);
    }

    createVehicle(vehicleName: string, customer: Customer): Vehicle {
        return new EnterpriseCar(vehicleName, customer);
    }
}