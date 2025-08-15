import { render, screen } from "@/utils/test-utils";
import AboutSection from "../index";

describe("AboutSection Component", () => {
    const about = {
        title: "About Company",
        subtitle: "Who we are",
        items: [
            { title: "Mission", description: "To build great games." },
            { title: "Vision", description: "To entertain the world." },
        ],
    };

    it("renders title and subtitle", () => {
        render(<AboutSection title={about.title} subtitle={about.subtitle} about={about as any} />);
        expect(screen.getByText(about.title)).toBeInTheDocument();
        expect(screen.getByText(about.subtitle)).toBeInTheDocument();
    });

    it("renders all about items with titles and descriptions", () => {
        render(<AboutSection title="About" subtitle="Subtitle" about={about as any} />);
        for (const item of about.items) {
            expect(screen.getByText(item.title)).toBeInTheDocument();
            expect(screen.getByText(item.description)).toBeInTheDocument();
        }
    });

    it("handles empty items gracefully", () => {
        const empty = { ...about, items: [] };
        render(<AboutSection title="About" subtitle="Subtitle" about={empty as any} />);
        expect(screen.getByText("About")).toBeInTheDocument();
        expect(screen.getByText("Subtitle")).toBeInTheDocument();
    });
});
