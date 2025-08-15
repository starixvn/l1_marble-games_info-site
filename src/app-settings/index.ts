import configs from "../../configs.json";
import type AppSettings from "./type";

export const getAppSettings = (): AppSettings => {
    if (typeof window !== "undefined" && window.envConfig) {
        return window.envConfig as AppSettings;
    }
    return configs as AppSettings;
};
