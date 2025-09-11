import { render, screen } from "@/utils/test-utils";
import GameDemoSection from "../index";

describe("GameDemoSection Component", () => {
    const demoLinks = {
        sabaSports: "/demo/saba-sports",
        sabaPlay: "/demo/saba-play",
    };

    it("renders the heading and both demo buttons with correct links", () => {
        // Arrange

        // Act
        render(<GameDemoSection demoLinks={demoLinks} />);

        // Assert
        expect(screen.getByText("Try Our Demo Games Now")).toBeInTheDocument();
        const sabaSportsLink = screen.getByRole("link", { name: "SABA Sports Demo" });
        const sabaPlayLink = screen.getByRole("link", { name: "SABAPLAY Demo" });
        expect(sabaSportsLink).toHaveAttribute("href", demoLinks.sabaSports);
        expect(sabaPlayLink).toHaveAttribute("href", demoLinks.sabaPlay);
        expect(sabaSportsLink).toHaveAttribute("target", "_blank");
        expect(sabaPlayLink).toHaveAttribute("rel", expect.stringContaining("noopener"));
    });
});
