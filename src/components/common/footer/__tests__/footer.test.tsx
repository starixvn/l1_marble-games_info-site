import { render, screen } from "@/utils/test-utils";
import Footer from "../index";

const mockSocialLinks = [
    { href: "https://twitter.com/saba", label: "Twitter" },
    { href: "https://linkedin.com/company/saba", label: "LinkedIn" },
    { href: "mailto:hello@saba.com", label: "Email" },
];

describe("Footer Component", () => {
    it("renders social links and copyright", () => {
        // Arrange

        // Act
        render(<Footer socialLinks={mockSocialLinks} copyright="© 2025 SABA Marble" />);

        // Assert
        mockSocialLinks.forEach(({ label, href }) => {
            const link = screen.getByRole("link", { name: new RegExp(label, "i") });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", href);
        });

        expect(screen.getByText(/© 2025 SABA Marble/i)).toBeInTheDocument();
    });
});
