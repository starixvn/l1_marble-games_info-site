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
        render(<Footer copyright="© 2025 SABA Marble" />);

        // Assert

        expect(screen.getByText(/© 2025 SABA Marble/i)).toBeInTheDocument();
    });
});
