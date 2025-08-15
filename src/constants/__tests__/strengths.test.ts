/*
  Tests for src/constants/strengths.ts
  - Uses Arrange → Act → Assert structure
*/

describe("constants/strengths - STRENGTHS export", () => {
    it("should re-export STRENGTHS_DATA as STRENGTHS from index", async () => {
        // Arrange
        const { STRENGTHS } = await import("@/constants");
        const { STRENGTHS_DATA } = await import("@/constants/strengths");

        // Act
        const titlesFromIndex = STRENGTHS.map((s) => s.title);
        const titlesFromSource = STRENGTHS_DATA.map((s) => s.title);

        // Assert
        expect(titlesFromIndex).toEqual(titlesFromSource);
    });

    it("should contain four strengths with non-empty title and description", async () => {
        // Arrange
        const { STRENGTHS } = await import("@/constants");

        // Act
        const count = STRENGTHS.length;

        // Assert
        expect(count).toBe(4);
        STRENGTHS.forEach((item) => {
            expect(typeof item.title).toBe("string");
            expect(item.title.length).toBeGreaterThan(0);
            expect(typeof item.description).toBe("string");
            expect(item.description.length).toBeGreaterThan(0);
            expect(item).not.toHaveProperty("icon");
        });
    });
});
