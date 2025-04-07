import { Address } from "./address";
import { ContactInfo } from "./contact-info";
import { Customer } from "./customer";
import { Email } from "./email";
import { PhoneNumber } from "./phone";

const customer = new Customer({
    name: 'Gabriel Almir',
    address: new Address({ city: 'unknown', complement: 'unknown', neighboor: 'unknown', state: 'unknown', street: 'unknown', zipCode: 'unknown' }),
    contact: new ContactInfo({
        email: new Email('example@gmail.com'),
        phone: new PhoneNumber('+19999999999'),
    })
});

console.log(`Email: ${customer.email}`);
console.log('Address: ', customer.address);
