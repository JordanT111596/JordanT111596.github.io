import eslint from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist", "coverage", "**/*.js"] },

    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    reactHooks.configs.flat.recommended,
    reactRefresh.configs.vite,
    prettierRecommended,

    {
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            // Mirrors the Workday Everywhere (WSP) conventions
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_", ignoreRestSiblings: true },
            ],
            "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-non-null-assertion": "error",
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "error",
            "func-style": ["error", "expression"],
            "no-console": "error",
            "no-negated-condition": "warn",
            curly: "error",
            eqeqeq: ["error", "smart"],
            "one-var": ["error", "never"],
            "prefer-const": "error",
        },
    },

    {
        files: ["src/tests/**"],
        rules: {
            "react-refresh/only-export-components": "off",
        },
    }
);
