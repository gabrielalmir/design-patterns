export class PhoneNumber {
    constructor(private readonly phoneNumber: string) {
        if (!/^\+?[1-9]\d{1,14}$/.test(phoneNumber)) {
            throw new Error('Invalid phone number');
        }
    }

    get value(): string {
        return this.phoneNumber;
    }
}
