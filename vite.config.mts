import federation from "@originjs/vite-plugin-federation";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        tsconfigPaths(),
        react(),
        federation({
            name: "host",
            remotes: {
                hero: "http://localhost:3001/assets/hero.js",
                about: "http://localhost:3002/assets/about.js",
                services: "http://localhost:3003/assets/services.js",
                gameShowcase: "http://localhost:3004/assets/gameShowcase.js",
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
                "react-router-dom": {
                    singleton: true,
                    requiredVersion: "^7.8.2",
                },
            },
        }),
    ],

    resolve: {
        alias: {
            "@images": path.resolve(__dirname, "src/assets/images"),
        },
    },

    server: {
        port: 3000,
        open: true,
    },
    preview: {
        port: 5000,
        strictPort: true,
        host: true,
    },
});
