import { Address } from "./address";
import { ContactInfo } from "./contact-info";

interface CustomerProps {
    name: string;
    contact: ContactInfo;
    address: Address;
}

export class Customer {
    name: string;
    contact: ContactInfo;
    address: Address;

    constructor(props: Readonly<CustomerProps>) {
        this.name = props.name;
        this.contact = props.contact;
        this.address = props.address;
    }

    get email() {
        return this.contact.email;
    }

    get phone() {
        return this.contact.phone;
    }
}
