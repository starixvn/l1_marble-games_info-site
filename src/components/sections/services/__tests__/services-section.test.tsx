import { render, screen } from "@/utils/test-utils";
import ServicesSection from "../index";

describe("ServicesSection Component", () => {
    const services = [
        {
            title: "Game Development",
            description: "End-to-end development services for games.",
            features: ["Prototyping", "Art & Design", "QA"],
        },
        {
            title: "Publishing",
            description: "Publishing support and platform integrations.",
            features: ["Steam", "App Store", "Google Play"],
        },
    ];

    it("renders title and subtitle", () => {
        // Arrange

        // Act
        render(<ServicesSection title="Our Services" subtitle="What we do" services={services} />);

        // Assert
        expect(screen.getByText("Our Services")).toBeInTheDocument();
        expect(screen.getByText("What we do")).toBeInTheDocument();
    });

    it("renders service cards with titles and descriptions", () => {
        // Arrange

        // Act
        render(<ServicesSection title="Title" subtitle="Subtitle" services={services} />);

        // Assert
        for (const svc of services) {
            expect(screen.getByText(svc.title)).toBeInTheDocument();
            expect(screen.getByText(svc.description)).toBeInTheDocument();
        }
    });

    it("renders service features when provided", () => {
        // Arrange

        // Act
        render(<ServicesSection title="Title" subtitle="Subtitle" services={services} />);

        // Assert
        for (const feature of services.flatMap((s) => s.features ?? [])) {
            expect(screen.getByText(feature)).toBeInTheDocument();
        }
    });

    it("handles empty features gracefully", () => {
        // Arrange
        const servicesNoFeatures = [{ title: "Analytics", description: "Insights and telemetry." }];

        // Act
        render(<ServicesSection title="Title" subtitle="Subtitle" services={servicesNoFeatures as any} />);

        // Assert
        expect(screen.getByText("Analytics")).toBeInTheDocument();
        expect(screen.getByText("Insights and telemetry.")).toBeInTheDocument();
    });
});
