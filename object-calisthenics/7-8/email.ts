export class Email {
    constructor(private readonly emailAddress: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(this.emailAddress)) {
            throw new Error("Invalid email address");
        }
    }

    get value() {
        return this.emailAddress;
    }
}
