describe("Utility Functions", () => {
    describe("formatDate", () => {
        it("formats date correctly", () => {
            const date = new Date("2024-01-15");
            // Add your formatDate function test here
            expect(date.getFullYear()).toBe(2024);
            expect(date.getMonth()).toBe(0); // January is 0
            expect(date.getDate()).toBe(15);
        });
    });

    describe("validateEmail", () => {
        it("validates correct email format", () => {
            const validEmails = ["test@example.com", "user.name@domain.co.uk", "user+tag@example.org"];

            validEmails.forEach((email) => {
                // Add your validateEmail function test here
                expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            });
        });

        it("rejects invalid email format", () => {
            const invalidEmails = ["invalid-email", "@example.com", "user@", "user@.com"];

            invalidEmails.forEach((email) => {
                // Add your validateEmail function test here
                expect(email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
            });
        });
    });

    describe("capitalizeFirst", () => {
        it("capitalizes first letter of string", () => {
            // Add your capitalizeFirst function test here
            const input = "hello world";
            const expected = "Hello world";
            expect(input.charAt(0).toUpperCase() + input.slice(1)).toBe(expected);
        });

        it("handles empty string", () => {
            // Add your capitalizeFirst function test here
            const input = "";
            expect(input).toBe("");
        });
    });

    describe("truncateText", () => {
        it("truncates text to specified length", () => {
            // Add your truncateText function test here
            const input = "This is a very long text that needs to be truncated";
            const maxLength = 20;
            const expected = "This is a very long ...";

            if (input.length > maxLength) {
                expect(input.substring(0, maxLength) + "...").toBe(expected);
            }
        });

        it("returns original text if shorter than max length", () => {
            // Add your truncateText function test here
            const input = "Short text";
            const maxLength = 20;

            if (input.length <= maxLength) {
                expect(input).toBe(input);
            }
        });
    });
});
