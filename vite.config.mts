import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), tsconfigPaths(), react()],

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
