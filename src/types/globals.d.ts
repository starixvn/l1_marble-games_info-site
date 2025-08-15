// Global ambient declarations

interface Window {
    envConfig?: {
        sentry?: {
            dsn?: string;
            environment?: string;
            [key: string]: unknown;
        };
        system?: string;
        [key: string]: unknown;
    };
}
