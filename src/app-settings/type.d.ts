interface SentryOptions {
    dsn: string;
    environment: string;
}

export default interface AppSettings {
    sentry: SentryOptions;
    system: string;
}
