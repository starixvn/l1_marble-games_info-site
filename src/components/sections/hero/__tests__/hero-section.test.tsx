import { mockData, render, screen } from "@/utils/test-utils";
import HeroSection from "../index";

describe("HeroSection Component", () => {
    it("renders hero section with title and description", () => {
        // Arrange

        // Act
        render(<HeroSection title={mockData.hero.title} description={mockData.hero.description} />);

        // Assert
        expect(screen.getByText(mockData.hero.title)).toBeInTheDocument();
        expect(screen.getByText(mockData.hero.description)).toBeInTheDocument();
    });
    it("renders without optional props", () => {
        // Arrange

        // Act
        render(<HeroSection title="Test Title" description="Test description" />);

        // Assert
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test description")).toBeInTheDocument();
    });
});
