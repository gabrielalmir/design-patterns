import fs from 'node:fs';

export class Logger {
    private static instance: Logger;

    private constructor(private readonly logFilePath: string) { }

    static getInstance() {
        if (this.instance == null) {
            const filepath = this.resolveLogPath("app.log");
            this.instance = new this(filepath);
        }

        return this.instance;
    }

    static resolveLogPath(filepath: string): string {
        if (!fs.existsSync(filepath)) {
            fs.writeFileSync(filepath, '');
        }

        return filepath;
    }

    log(message: string) {
        const logEntry = `${new Date().toISOString()} ${message}`;
        fs.appendFileSync(this.logFilePath, logEntry);
        console.log(logEntry);
    }
}
