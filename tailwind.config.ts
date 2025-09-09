import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        container: {
            center: true,
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
                "2xl": "1200px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["Roboto", "Inter", "sans-serif"],
            },
            spacing: {
                "1": "0.25rem",
            },
            colors: {
                gray: {
                    800: "#1F2937",
                    900: "#111827",
                },
                blue: {
                    500: "#3B82F6",
                    600: "#2563EB",
                    700: "#1D4ED8",
                },
            },
            animation: {
                "fade-in": "fadeIn 0.6s ease-out",
                "slide-in-from-bottom": "slideInFromBottom 0.6s ease-out",
                "slide-in-from-left": "slideInFromLeft 0.6s ease-out",
                "slide-in-from-right": "slideInFromRight 0.6s ease-out",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideInFromBottom: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideInFromLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInFromRight: {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
