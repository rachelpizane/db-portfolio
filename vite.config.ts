import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/tests/setup-tests.tsx",
        coverage: {
            reporter: ["text", "json", "html"],
            include: ["src/**/*.{ts,tsx}"],
            exclude: [
                "src/components/ui/**",
                "**/types/**",
                "src/routes/**",
                "src/main.tsx",
                "src/App.tsx",
                "tests/setup-tests.tsx",
            ],
        },
    },
});
