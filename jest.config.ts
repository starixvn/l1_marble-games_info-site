import type { Config } from "jest";
import nextJest from "next/jest";

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files
    dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig: Config = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/app/layout.tsx", "!src/app/page.tsx", "!**/node_modules/**"],
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
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    coverageReporters: ["json", "lcov", "text", "text-summary"],
    testResultsProcessor: "jest-sonar-reporter",
    coveragePathIgnorePatterns: ["node_modules", ".d.ts", ".next", "coverage", "public", ".config.ts", ".config.js"],
    testTimeout: 10000,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
