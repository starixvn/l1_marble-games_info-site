import { render, screen } from "@/utils/test-utils";
import "@testing-library/jest-dom";
import Card from "../index";

describe("Card Component", () => {
    it("renders card with children", () => {
        // Arrange

        // Act
        render(
            <Card>
                <div>Card content</div>
            </Card>
        );

        // Assert
        expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("renders card with custom className", () => {
        // Arrange

        // Act
        render(
            <Card className="custom-card">
                <div>Card content</div>
            </Card>
        );

        // Assert
        // Find the card container by looking for the content and then its parent
        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer?.className).toContain("custom-card");
    });

    it("renders card with hover effect by default", () => {
        // Arrange

        // Act
        render(
            <Card>
                <div>Card content</div>
            </Card>
        );

        // Assert
        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        // The card should have the hover class applied
        expect(cardContainer?.className).toContain("hover");
    });

    it("renders card without hover effect when disabled", () => {
        // Arrange

        // Act
        render(
            <Card hover={false}>
                <div>Card content</div>
            </Card>
        );

        // Assert
        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        // The card should not have the hover class when disabled
        expect(cardContainer?.className).not.toContain("hover");
    });

    it("renders card with both custom className and hover effect", () => {
        // Arrange

        // Act
        render(
            <Card className="custom-card">
                <div>Card content</div>
            </Card>
        );

        // Assert
        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer?.className).toContain("custom-card");
        expect(cardContainer?.className).toContain("hover");
    });
});
