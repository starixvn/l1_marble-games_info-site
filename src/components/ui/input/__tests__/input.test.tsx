import { fireEvent, render, screen } from "@/utils/test-utils";
import Input from "../index";

describe("Input Component", () => {
    it("renders input with placeholder", () => {
        render(<Input type="text" name="email" placeholder="Enter your email" onChange={jest.fn()} />);

        expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
        expect(screen.getByDisplayValue("")).toBeInTheDocument();
    });

    it("renders input with value", () => {
        const handleChange = jest.fn();
        render(<Input type="email" name="email" placeholder="Email" value="test@example.com" onChange={handleChange} />);

        expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
    });

    it("calls onChange handler when input changes", () => {
        const handleChange = jest.fn();
        render(<Input type="text" name="email" placeholder="Email" onChange={handleChange} />);

        const input = screen.getByPlaceholderText("Email") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "new@example.com" } });

        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("renders input with custom className", () => {
        render(<Input type="text" name="email" placeholder="Email" className="custom-input" onChange={jest.fn()} />);

        const input = screen.getByPlaceholderText("Email");
        expect(input).toHaveClass("custom-input");
    });

    it("renders input with different types", () => {
        const { rerender } = render(<Input type="email" name="email" placeholder="Email" onChange={jest.fn()} />);
        expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "email");

        rerender(<Input type="text" name="email" placeholder="Email" onChange={jest.fn()} />);
        expect(screen.getByPlaceholderText("Email")).toHaveAttribute("type", "text");
    });

    it("renders textarea when type is textarea", () => {
        render(<Input type="textarea" name="message" placeholder="Your message" rows={5} onChange={jest.fn()} />);

        const textarea = screen.getByPlaceholderText("Your message");
        expect(textarea.tagName.toLowerCase()).toBe("textarea");
    });

    it("renders required input", () => {
        render(<Input type="text" name="email" placeholder="Email" required onChange={jest.fn()} />);

        const input = screen.getByPlaceholderText("Email");
        expect(input).toBeRequired();
    });
});
