import { fireEvent, render, screen } from "@/utils/test-utils";
import Input from "../index";

describe("Input Component", () => {
    it("renders input with placeholder", () => {
        // Arrange

        // Act
        render(<Input type="text" name="email" placeholder="Enter your email" onChange={jest.fn()} />);

        // Assert
        expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
        expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });

    it("renders input with value", () => {
        // Arrange
        const handleChange = jest.fn();

        // Act
        render(<Input type="email" name="email" placeholder="Email" value="test@example.com" onChange={handleChange} />);

        // Assert
        expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
    });

    it("calls onChange handler when input changes", () => {
        // Arrange
        const handleChange = jest.fn();

        // Act
        render(<Input type="text" name="email" placeholder="Email" onChange={handleChange} />);

        const input = screen.getByPlaceholderText("Email") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "new@example.com" } });

        // Assert
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("renders input with custom className", () => {
        // Arrange

        // Act
        render(<Input type="text" name="email" placeholder="Email" className="custom-input" onChange={jest.fn()} />);

        // Assert
        const input = screen.getByPlaceholderText("Email");
        expect(input).toHaveClass("custom-input");
    });

    it("renders input with different types", () => {
        // Arrange

        // Act
        const { rerender } = render(<Input type="email" name="email" placeholder="Email" onChange={jest.fn()} />);

        // Assert
        expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "email");

        // Act
        rerender(<Input type="text" name="email" placeholder="Email" onChange={jest.fn()} />);

        // Assert
        expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "text");
    });

    it("renders textarea when type is textarea", () => {
        // Arrange

        // Act
        render(<Input type="textarea" name="message" placeholder="Your message" rows={5} onChange={jest.fn()} />);

        // Assert
        const textarea = screen.getByPlaceholderText("Your message");
        expect(textarea.tagName.toLowerCase()).toBe("textarea");
    });

    it("renders required input", () => {
        // Arrange

        // Act
        render(<Input type="text" name="email" placeholder="Email" required onChange={jest.fn()} />);

        // Assert
        const input = screen.getByPlaceholderText("Email");
        expect(input).toBeRequired();
    });
});
