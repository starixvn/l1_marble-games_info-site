import { fireEvent, render, screen } from "@/utils/test-utils";
import ContactSection from "../index";

describe("ContactSection Component", () => {
    const defaultProps = {
        title: "Contact Us",
        subtitle: "Get in touch with us",
        onSubmit: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("renders contact section with title and subtitle", () => {
        // Arrange

        // Act
        render(<ContactSection {...defaultProps} />);

        // Assert
        expect(screen.getByText("Contact Us")).toBeInTheDocument();
        expect(screen.getByText("Get in touch with us")).toBeInTheDocument();
    });

    it("renders contact form fields", () => {
        // Arrange

        // Act
        render(<ContactSection {...defaultProps} />);

        // Assert
        // Check for inputs by placeholder text since there are no labels
        expect(screen.getByPlaceholderText("Your Name")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Your Email")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
    });

    it("renders submit button", () => {
        // Arrange

        // Act
        render(<ContactSection {...defaultProps} />);

        // Assert
        const submitButton = screen.getByRole("button", { name: /send message/i });
        expect(submitButton).toBeInTheDocument();
    });

    it("handles form submission", () => {
        // Arrange
        const handleSubmit = jest.fn();

        // Act
        render(<ContactSection {...defaultProps} onSubmit={handleSubmit} />);

        const nameInput = screen.getByPlaceholderText("Your Name");
        const emailInput = screen.getByPlaceholderText("Your Email");
        const subjectInput = screen.getByPlaceholderText("Subject");
        const messageInput = screen.getByPlaceholderText("Your Message");
        const submitButton = screen.getByRole("button", { name: /send message/i });

        // Fill all required fields
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
        fireEvent.change(messageInput, { target: { value: "Hello world" } });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith({
            name: "John Doe",
            email: "john@example.com",
            subject: "Test Subject",
            message: "Hello world",
        });
    });

    it("resets form after submission", () => {
        // Arrange
        const handleSubmit = jest.fn();

        // Act
        render(<ContactSection {...defaultProps} onSubmit={handleSubmit} />);

        const nameInput = screen.getByPlaceholderText("Your Name");
        const emailInput = screen.getByPlaceholderText("Your Email");
        const subjectInput = screen.getByPlaceholderText("Subject");
        const messageInput = screen.getByPlaceholderText("Your Message");
        const submitButton = screen.getByRole("button", { name: /send message/i });

        // Fill all required fields
        fireEvent.change(nameInput, { target: { value: "John Doe" } });
        fireEvent.change(emailInput, { target: { value: "john@example.com" } });
        fireEvent.change(subjectInput, { target: { value: "Test Subject" } });
        fireEvent.change(messageInput, { target: { value: "Hello world" } });

        // Submit the form
        fireEvent.click(submitButton);

        // Assert
        // Form should be reset after submission
        expect(nameInput).toHaveValue("");
        expect(emailInput).toHaveValue("");
        expect(subjectInput).toHaveValue("");
        expect(messageInput).toHaveValue("");
    });
});
