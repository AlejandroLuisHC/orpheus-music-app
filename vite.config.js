import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    commonjsOptions: {
        esmExternals: true,
    },
    server: {
        port: 3000,
    },
});