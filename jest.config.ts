import type { Config } from "jest";

const config: Config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/app/api/"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss)$": "identity-obj-proxy",
    },
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70,
        },
    },
    testMatch: ["<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}", "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: ["/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
    coverageReporters: ["json", "lcov", "text", "text-summary"],
    testResultsProcessor: "jest-sonar-reporter",
    coveragePathIgnorePatterns: ["node_modules", ".d.ts", "coverage", "public", ".config.ts", ".config.js"],
    testTimeout: 10000,
};

export default config;
