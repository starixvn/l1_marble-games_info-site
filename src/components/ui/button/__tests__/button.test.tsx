import { fireEvent, render, screen } from "@/utils/test-utils";
import Button from "../index";

describe("Button Component", () => {
    it("renders button with children", () => {
        // Arrange

        // Act
        render(<Button>Click me</Button>);

        // Assert
        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toBeInTheDocument();
    });

    it("renders button with custom className", () => {
        // Arrange

        // Act
        render(<Button className="custom-class">Custom Button</Button>);

        // Assert
        const button = screen.getByRole("button", { name: /custom button/i });
        expect(button).toHaveClass("custom-class");
    });

    it("calls onClick handler when clicked", () => {
        // Arrange
        const handleClick = jest.fn();

        // Act
        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole("button", { name: /click me/i });
        fireEvent.click(button);

        // Assert
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("renders button with primary variant by default", () => {
        // Arrange

        // Act
        render(<Button>Primary Button</Button>);

        // Assert
        const button = screen.getByRole("button", { name: /primary button/i });
        expect(button).toHaveClass("btnPrimary");
    });

    it("renders button with secondary variant", () => {
        // Arrange

        // Act
        render(<Button variant="secondary">Secondary Button</Button>);

        // Assert
        const button = screen.getByRole("button", { name: /secondary button/i });
        expect(button).toHaveClass("bg-gray-700");
    });

    it("renders as anchor when href is provided", () => {
        // Arrange

        // Act
        render(<Button href="/test">Link Button</Button>);

        // Assert
        const link = screen.getByRole("link", { name: /link button/i });
        expect(link).toHaveAttribute("href", "/test");
    });
});
