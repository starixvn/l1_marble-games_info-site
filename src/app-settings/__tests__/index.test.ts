import { getAppSettings } from "@/app-settings";
import configs from "../../../configs.json";

describe("app-settings/index", () => {
    afterEach(() => {
        // Cleanup
        delete (window as any).envConfig;
    });

    it("returns window.envConfig when available", () => {
        // Arrange
        const mockConfig = {
            sentry: { dsn: "test-dsn", environment: "test" },
            system: "TEST",
        };
        (window as any).envConfig = mockConfig;

        // Act
        const result = getAppSettings();

        // Assert
        expect(result).toEqual(mockConfig);
    });

    it("falls back to bundled configs.json when window.envConfig is missing", () => {
        // Arrange
        delete (window as any).envConfig;

        // Act
        const result = getAppSettings();

        // Assert
        expect(result).toEqual(configs);
    });
});
