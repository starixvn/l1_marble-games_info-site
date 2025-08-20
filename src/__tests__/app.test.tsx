import App from "@/App";
import { render, screen } from "@/utils/test-utils";

describe("App", () => {
    it("renders Home page within MainLayout", async () => {
        // Arrange

        // Act
        render(<App />);

        // Assert
        expect(await screen.findByText(/Experience the Thrill of RNG Marble Games/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Home/i).length).toBeGreaterThan(0); // header nav is present
    });
});
