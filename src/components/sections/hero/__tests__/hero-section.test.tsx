import { mockData, render, screen } from "@/utils/test-utils";
import HeroSection from "../index";

describe("HeroSection Component", () => {
    it("renders hero section with title and description", () => {
        // Arrange

        // Act
        render(
            <HeroSection
                title={mockData.hero.title}
                description={mockData.hero.description}
                ctaText={mockData.hero.ctaText}
                ctaHref={mockData.hero.ctaHref}
            />
        );

        // Assert
        expect(screen.getByText(mockData.hero.title)).toBeInTheDocument();
        expect(screen.getByText(mockData.hero.description)).toBeInTheDocument();
        expect(screen.getByText(mockData.hero.ctaText)).toBeInTheDocument();
    });

    it("renders call-to-action link", () => {
        // Arrange

        // Act
        render(<HeroSection title="Test Title" description="Test description" ctaText="Get Started" ctaHref="/get-started" />);

        // Assert
        const ctaLink = screen.getByRole("link", { name: /get started/i });
        expect(ctaLink).toBeInTheDocument();
        expect(ctaLink).toHaveAttribute("href", "/get-started");
    });

    it("renders without optional props", () => {
        // Arrange

        // Act
        render(<HeroSection title="Test Title" description="Test description" ctaText="Get Started" ctaHref="/get-started" />);

        // Assert
        expect(screen.getByText("Test Title")).toBeInTheDocument();
        expect(screen.getByText("Test description")).toBeInTheDocument();
        expect(screen.getByRole("link")).toBeInTheDocument();
    });
});
