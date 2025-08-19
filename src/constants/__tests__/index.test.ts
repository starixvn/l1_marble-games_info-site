/*
  Tests for src/constants/index.ts
  - Uses Arrange → Act → Assert structure per project rules
*/

describe("constants/index - data shapes", () => {
    it("should expose NAV_LINKS with expected last link as button", async () => {
        // Arrange
        const { NAV_LINKS } = await import("@/constants");

        // Act
        const lastLink = NAV_LINKS[NAV_LINKS.length - 1];

        // Assert
        expect(Array.isArray(NAV_LINKS)).toBe(true);
        expect(NAV_LINKS.length).toBeGreaterThanOrEqual(5);
        expect(lastLink.label).toBe("Contact Us");
        expect(lastLink.isButton).toBe(true);
    });

    it("should expose SERVICES with at least two entries and features on the first", async () => {
        // Arrange
        const { SERVICES } = await import("@/constants");

        // Act
        const first = SERVICES[0];

        // Assert
        expect(SERVICES.length).toBeGreaterThanOrEqual(2);
        expect(first.title).toBe("Extensive Odds Feed");
        expect(first.features).toEqual(expect.arrayContaining(["Handicap", "Over/Under", "1X2"]));
    });

    it("should expose GAMES showcase with three themed entries", async () => {
        // Arrange
        const { GAMES } = await import("@/constants");

        // Act
        const titles = GAMES.map((g) => g.title);

        // Assert
        expect(GAMES).toHaveLength(3);
        expect(titles).toEqual(expect.arrayContaining(["Original Theme", "Galaxy Theme", "EPL Theme"]));
    });

    it("should expose DEMO_LINKS with expected keys", async () => {
        // Arrange
        const { DEMO_LINKS } = await import("@/constants");

        // Act
        const keys = Object.keys(DEMO_LINKS);

        // Assert
        expect(keys).toEqual(expect.arrayContaining(["sabaSports", "sabaPlay"]));
    });

    it("should expose ABOUT_DATA with three items", async () => {
        // Arrange
        const { ABOUT_DATA } = await import("@/constants");

        // Act
        const { title, items } = ABOUT_DATA;

        // Assert
        expect(title).toBe("About SABA Marbles");
        expect(items).toHaveLength(3);
        items.forEach((it) => {
            expect(typeof it.title).toBe("string");
            expect(typeof it.description).toBe("string");
        });
    });

    it("should expose SOCIAL_LINKS including LinkedIn", async () => {
        // Arrange
        const { SOCIAL_LINKS } = await import("@/constants");

        // Act
        const labels = SOCIAL_LINKS.map((s) => s.label);

        // Assert
        expect(labels).toEqual(expect.arrayContaining(["LinkedIn"]));
    });

    it("should expose COPYRIGHT_TEXT for year 2025", async () => {
        // Arrange
        const { COPYRIGHT_TEXT } = await import("@/constants");

        // Act
        const text = COPYRIGHT_TEXT;

        // Assert
        expect(text).toContain("2025");
    });

    it("should expose HERO_DATA with required fields", async () => {
        // Arrange
        const { HERO_DATA } = await import("@/constants");

        // Act
        const { title, description, ctaText, ctaHref } = HERO_DATA;

        // Assert
        expect(typeof title).toBe("string");
        expect(typeof description).toBe("string");
        expect(ctaText).toBe("Live Demo");
        expect(ctaHref).toBe("#showcase");
    });

    it("should expose SECTION_TITLES with expected section keys", async () => {
        // Arrange
        const { SECTION_TITLES } = await import("@/constants");

        // Act
        const keys = Object.keys(SECTION_TITLES);

        // Assert
        expect(keys).toEqual(expect.arrayContaining(["strengths", "services", "showcase", "about", "contact"]));
    });
});
