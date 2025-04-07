interface AddressProps {
    street: string;
    complement: string;
    neighboor: string;
    city: string;
    state: string;
    zipCode: string;
}

export class Address {
    street: string;
    complement: string;
    neighboor: string;
    city: string;
    state: string;
    zipCode: string;

    constructor(props: Readonly<AddressProps>) {
        this.street = props.street;
        this.complement = props.complement;
        this.neighboor = props.neighboor;
        this.city = props.city;
        this.state = props.state;
        this.zipCode = props.zipCode;
    }
}
