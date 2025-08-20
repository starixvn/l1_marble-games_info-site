import { routes } from "@/routes";
import { render, screen } from "@/utils/test-utils";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("App Routes", () => {
    it("renders HomePage on root path", async () => {
        // Arrange
        const App = () => (
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    {routes.map((r) => (
                        <Route key={r.path} path={r.path} element={r.element} />
                    ))}
                </Routes>
            </MemoryRouter>
        );

        // Act
        render(<App />);

        // Assert
        expect(await screen.findByText(/Experience the Thrill of RNG Marble Games/i)).toBeInTheDocument();
    });

    it("renders Not Found on unknown path", () => {
        // Arrange
        const App = () => (
            <MemoryRouter initialEntries={["/unknown"]}>
                <Routes>
                    {routes.map((r) => (
                        <Route key={r.path} path={r.path} element={r.element} />
                    ))}
                </Routes>
            </MemoryRouter>
        );

        // Act
        render(<App />);

        // Assert
        expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    });
});
