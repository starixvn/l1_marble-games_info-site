import { render, screen } from "@/utils/test-utils";
import AboutSection from "../index";

describe("AboutSection Component", () => {
    const about = {
        title: "About Company",
        subtitle: "Who we are",
        items: [
            { title: "Mission", description: "To build great games." },
            { title: "Vision", description: "To entertain the world." },
        ],
    };

    it("renders title and subtitle", () => {
        // Arrange

        // Act
        render(<AboutSection title={about.title} subtitle={about.subtitle} about={about} />);

        // Assert
        expect(screen.getByText(about.title)).toBeInTheDocument();
        expect(screen.getByText(about.subtitle)).toBeInTheDocument();
    });

    it("renders all about items with titles and descriptions", () => {
        // Arrange

        // Act
        render(<AboutSection title="About" subtitle="Subtitle" about={about} />);

        // Assert
        for (const item of about.items) {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
        }
    });

    it("handles empty items gracefully", () => {
        // Arrange
        const empty = { ...about, items: [] };

        // Act
        render(<AboutSection title="About" subtitle="Subtitle" about={empty} />);

        // Assert
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    });
});
