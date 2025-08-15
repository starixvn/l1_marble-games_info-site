import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";

// Add any providers here if needed (Theme, Context, etc.)
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };

// Common test data
export const mockData = {
    hero: {
        title: "Test Hero Title",
        description: "Test hero description for testing purposes",
        ctaText: "Get Started",
        ctaHref: "/get-started",
    },
    about: {
        title: "About Us",
        description: "Test about section description",
    },
    contact: {
        title: "Contact Us",
        email: "test@example.com",
        phone: "+1234567890",
    },
};

// Mock functions
export const mockFunctions = {
    handleSubmit: jest.fn(),
    handleClick: jest.fn(),
    handleChange: jest.fn(),
};

// Test constants
export const TEST_IDS = {
    HERO_SECTION: "hero-section",
    ABOUT_SECTION: "about-section",
    CONTACT_SECTION: "contact-section",
    BUTTON: "button",
    INPUT: "input",
    CARD: "card",
};
