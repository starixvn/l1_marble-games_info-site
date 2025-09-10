import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), tsconfigPaths(), react()],

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
