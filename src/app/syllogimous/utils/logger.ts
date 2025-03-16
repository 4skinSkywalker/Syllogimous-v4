type LogLevel = "debug" | "info" | "warn" | "error";

export class Logger {
    private level: LogLevel;
    private isVerbose: boolean;

    constructor(level: LogLevel = "info", isVerbose: boolean = false) {
        this.level = level;
        this.isVerbose = isVerbose;
    }

    setLevel(level: LogLevel): void {
        this.level = level;
    }

    setVerbose(isVerbose: boolean): void {
        this.isVerbose = isVerbose;
    }

    private shouldLog(level: LogLevel): boolean {
        const order = { "debug": 0, "info": 1, "warn": 2, "error": 3 };
        return order[level] >= order[this.level];
    }

    log(level: LogLevel, message: string, ...optionalParams: any[]): void {
        if (this.shouldLog(level)) {
            if (this.isVerbose) {
                console.log(`[${level.toUpperCase()}]`, message, ...optionalParams);
            } else {
                console.log(`[${level.toUpperCase()}]`, message);
            }
        }
    }

    debug(message: string, ...optionalParams: any[]): void {
        this.log("debug", message, ...optionalParams);
    }

    info(message: string, ...optionalParams: any[]): void {
        this.log("info", message, ...optionalParams);
    }

    warn(message: string, ...optionalParams: any[]): void {
        this.log("warn", message, ...optionalParams);
    }

    error(message: string, ...optionalParams: any[]): void {
        this.log("error", message, ...optionalParams);
    }
}
