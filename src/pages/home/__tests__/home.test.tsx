import { HERO_DATA, SECTION_TITLES } from "@/constants";
import HomePage from "@/pages/home";
import { render, screen } from "@/utils/test-utils";

describe("HomePage", () => {
    it("renders key sections and texts", () => {
        // Arrange

        // Act
        render(<HomePage />);

        // Assert
        expect(screen.getByText(HERO_DATA.title)).toBeInTheDocument();
        expect(screen.getByText(SECTION_TITLES.strengths.title)).toBeInTheDocument();
        expect(screen.getByText(SECTION_TITLES.services.title)).toBeInTheDocument();
        expect(screen.getByText(SECTION_TITLES.showcase.title)).toBeInTheDocument();
        expect(screen.getByText(SECTION_TITLES.about.title)).toBeInTheDocument();
        expect(screen.getByText(SECTION_TITLES.contact.title)).toBeInTheDocument();
    });
});
