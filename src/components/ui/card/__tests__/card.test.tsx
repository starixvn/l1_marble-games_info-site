import { render, screen } from "@/utils/test-utils";
import "@testing-library/jest-dom";
import Card from "../index";

describe("Card Component", () => {
    it("renders card with children", () => {
        render(
            <Card>
                <div>Card content</div>
            </Card>
        );

        expect(screen.getByText("Card content")).toBeInTheDocument();
    });

    it("renders card with custom className", () => {
        render(
            <Card className="custom-card">
                <div>Card content</div>
            </Card>
        );

        // Find the card container by looking for the content and then its parent
        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer?.className).toContain("custom-card");
    });

    it("renders card with hover effect by default", () => {
        render(
            <Card>
                <div>Card content</div>
            </Card>
        );

        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        // The card should have the hover class applied
        expect(cardContainer?.className).toContain("hover");
    });

    it("renders card without hover effect when disabled", () => {
        render(
            <Card hover={false}>
                <div>Card content</div>
            </Card>
        );

        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        // The card should not have the hover class when disabled
        expect(cardContainer?.className).not.toContain("hover");
    });

    it("renders card with both custom className and hover effect", () => {
        render(
            <Card className="custom-card">
                <div>Card content</div>
            </Card>
        );

        const content = screen.getByText("Card content");
        const cardContainer = content.parentElement;
        expect(cardContainer).toBeInTheDocument();
        expect(cardContainer?.className).toContain("custom-card");
        expect(cardContainer?.className).toContain("hover");
    });
});
