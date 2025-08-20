import { COPYRIGHT_TEXT, NAV_LINKS } from "@/constants";
import MainLayout from "@/layouts/main-layout";
import { render, screen } from "@/utils/test-utils";

describe("MainLayout", () => {
    it("renders header, footer and children", () => {
        // Arrange
        const Child = () => <div>Child Content</div>;

        // Act
        render(
            <MainLayout>
                <Child />
            </MainLayout>
        );

        // Assert
        // Header (use getAllByText because duplicates may exist in mobile/desktop menus)
        NAV_LINKS.forEach((link) => {
            expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
        });

        // Children
        expect(screen.getByText("Child Content")).toBeInTheDocument();

        // Footer
        expect(screen.getByText(COPYRIGHT_TEXT)).toBeInTheDocument();
    });
});
