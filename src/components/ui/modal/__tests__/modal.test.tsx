import { fireEvent, render, screen } from "@/utils/test-utils";
import "@testing-library/jest-dom";
import Modal from "../index";

describe("Modal Component", () => {
    it("does not render when closed", () => {
        // Arrange
        const onClose = jest.fn();

        // Act
        render(
            <Modal isOpen={false} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Assert
        expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
    });

    it("renders children when open", () => {
        // Arrange
        const onClose = jest.fn();

        // Act
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Assert
        expect(screen.getByText("Modal content")).toBeInTheDocument();
    });

    it("calls onClose when clicking overlay", () => {
        // Arrange
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Act
        const overlay = document.querySelector(".overlay") as HTMLElement;
        expect(overlay).toBeInTheDocument();
        fireEvent.click(overlay);

        // Assert
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does not close when clicking inside content", () => {
        // Arrange
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Act
        const contentWrapper = document.querySelector(".contentWrapper") as HTMLElement;
        expect(contentWrapper).toBeInTheDocument();
        fireEvent.click(contentWrapper);

        // Assert
        expect(onClose).not.toHaveBeenCalled();
    });

    it("calls onClose when clicking the close button", () => {
        // Arrange
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Act
        const closeButton = screen.getByRole("button", { name: /close/i });
        fireEvent.click(closeButton);

        // Assert
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("calls onClose on Escape key press", () => {
        // Arrange
        const onClose = jest.fn();
        render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Act
        fireEvent.keyDown(window, { key: "Escape" });

        // Assert
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("locks body scroll when open and restores on unmount", () => {
        // Arrange
        const previousOverflow = "scroll";
        document.body.style.overflow = previousOverflow;
        const onClose = jest.fn();

        // Act
        const { unmount } = render(
            <Modal isOpen={true} onClose={onClose}>
                <div>Modal content</div>
            </Modal>
        );

        // Assert
        expect(document.body.style.overflow).toBe("hidden");

        // Cleanup (implicit assert of restoration)
        unmount();
        expect(document.body.style.overflow).toBe(previousOverflow);
    });
});
