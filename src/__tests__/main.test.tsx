import "@testing-library/jest-dom";

jest.mock("react-dom/client", () => {
    const actual = jest.requireActual("react-dom/client");
    const createRoot = jest.fn(() => ({ render: jest.fn() }));
    return {
        __esModule: true,
        ...actual,
        createRoot,
        default: { ...actual, createRoot },
    };
});

describe("main.tsx entry", () => {
    beforeEach(() => {
        jest.resetModules();
        jest.clearAllMocks();
    });

    it("creates root and renders App", () => {
        // Arrange
        const root = document.createElement("div");
        root.setAttribute("id", "root");
        document.body.appendChild(root);

        // Act
        let callsCount = 0;
        jest.isolateModules(() => {
            const client = require("react-dom/client");
            const createRootMock = client.createRoot as jest.Mock;
            require("@/main");
            callsCount = createRootMock.mock.calls.length;
        });

        // Assert
        expect(callsCount).toBe(1);

        // Cleanup
        document.body.removeChild(root);
    });

    it("throws if root element missing", () => {
        // Arrange
        const original = document.getElementById("root");
        if (original) {
            original.remove();
        }

        // Act
        const run = () =>
            jest.isolateModules(() => {
                require("@/main");
            });

        // Assert
        expect(run).toThrow(/Root element with id 'root' not found/);
    });
});
