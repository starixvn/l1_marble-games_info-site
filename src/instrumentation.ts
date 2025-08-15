import * as Sentry from "@sentry/nextjs";
import configs from "../configs.json";

export async function register() {
    Sentry.init({ ...configs.sentry });
}
