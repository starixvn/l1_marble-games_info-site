import { fireEvent, render, screen, within } from "@/utils/test-utils";
import Header from "../index";

const mockNavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
    { href: "/get-started", label: "Get Started", isButton: true },
];

describe("Header Component", () => {
    it("renders brand and navigation links", () => {
        // Arrange

        // Act
        render(<Header navLinks={mockNavLinks} />);

        // Assert
        // Brand
        expect(screen.getByRole("link", { name: /saba marble/i })).toBeInTheDocument();

        // Desktop links and CTA button (rendered as links)
        expect(screen.getAllByRole("link", { name: /home/i }).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", { name: /about/i }).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", { name: /contact/i }).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("link", { name: /get started/i }).length).toBeGreaterThan(0);
    });

    it("toggles the mobile menu open and closed", () => {
        // Arrange

        // Act
        render(<Header navLinks={mockNavLinks} />);

        // Assert
        // Find a link that exists inside the mobile menu (it shares anchors with desktop)
        // and scope to the container that has `md:hidden` (the mobile menu wrapper),
        // not the button wrapper.
        const candidateLinks = screen.getAllByRole("link", { name: /about/i });
        const mobileMenuContainer = candidateLinks
            .map((link) => link.closest("div"))
            .find((div) => div && /(^|\s)md:hidden(\s|$)/.test(div.className)) as HTMLElement;

        expect(mobileMenuContainer).toBeInTheDocument();
        expect(mobileMenuContainer.className).toMatch(/mobileMenu(\s|$)/);

        // Open via toggle button
        fireEvent.click(screen.getByRole("button", { name: /toggle mobile menu/i }));
        expect(mobileMenuContainer.className).toMatch(/mobileMenuOpen(\s|$)/);

        // Click a link inside the mobile menu to close it
        const scoped = within(mobileMenuContainer);
        fireEvent.click(scoped.getByRole("link", { name: /about/i }));
        expect(mobileMenuContainer.className).toMatch(/mobileMenu(\s|$)/);
    });

    it("renders nav links with correct hrefs", () => {
        // Arrange

        // Act
        render(<Header navLinks={mockNavLinks} />);

        // Assert
        expect(screen.getAllByRole("link", { name: /home/i })[0]).toHaveAttribute("href", "#home");
        expect(screen.getAllByRole("link", { name: /about/i })[0]).toHaveAttribute("href", "#about");
        expect(screen.getAllByRole("link", { name: /contact/i })[0]).toHaveAttribute("href", "#contact");
        expect(screen.getAllByRole("link", { name: /get started/i })[0]).toHaveAttribute("href", "/get-started");
    });
});
