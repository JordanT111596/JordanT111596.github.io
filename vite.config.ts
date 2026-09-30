import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
        globals: true,
        clearMocks: true,
        setupFiles: ["src/setupTests.ts"],
        include: ["src/tests/**/*.spec.{ts,tsx}"],
        coverage: {
            provider: "v8",
            include: ["src/**/*.{ts,tsx}"],
            exclude: ["src/**/*.d.ts", "src/setupTests.ts", "src/tests/**", "src/types.ts"],
            reporter: ["text", "lcov"],
            thresholds: {
                branches: 80,
                functions: 80,
                lines: 80,
                statements: 80,
            },
        },
    },
});
