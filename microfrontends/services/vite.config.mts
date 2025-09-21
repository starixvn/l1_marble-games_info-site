import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        federation({
            name: "services",
            filename: "services.js",
            exposes: {
                "./ServicesSection": "./src/ServicesSection.tsx",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^19.1.1",
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: "^19.1.1",
                },
            },
            dev: {
                enabled: true,
            },
        }),
    ],
    server: {
        port: 3003,
        cors: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    },
    build: {
        target: "esnext",
        minify: false,
        cssCodeSplit: false,
    },
});
