import { render, screen } from "@/utils/test-utils";
import StrengthsSection from "../index";

describe("StrengthsSection Component", () => {
    const strengths = [
        { title: "Reliability", description: "We deliver consistent results." },
        { title: "Communication", description: "Clear and timely updates." },
        { title: "Performance", description: "Fast and efficient solutions." },
        { title: "Growth", description: "Data-driven improvements." },
    ];

    it("renders title and subtitle", () => {
        // Arrange

        // Act
        render(<StrengthsSection title="Our Strengths" subtitle="Why choose us" strengths={strengths} />);

        // Assert
        expect(screen.getByText("Our Strengths")).toBeInTheDocument();
        expect(screen.getByText("Why choose us")).toBeInTheDocument();
    });

    it("renders all strengths with titles and descriptions", () => {
        // Arrange

        // Act
        render(<StrengthsSection title="Title" subtitle="Subtitle" strengths={strengths} />);

        // Assert
        for (const s of strengths) {
            expect(screen.getByText(s.title)).toBeInTheDocument();
            expect(screen.getByText(s.description)).toBeInTheDocument();
        }
    });
});
