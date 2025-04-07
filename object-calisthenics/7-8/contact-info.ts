import { Email } from "./email";
import { PhoneNumber } from "./phone";

interface ContactInfoProps {
    email: Email;
    phone: PhoneNumber;
}

export class ContactInfo {
    constructor(private readonly props: Readonly<ContactInfoProps>) { }

    get email() {
        const { email } = this.props;
        return email.value;
    }

    get phone() {
        const { phone } = this.props;
        return phone.value;
    }
}
