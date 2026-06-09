import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  {
    rules: {
      // — React & Hooks —
      "react-hooks/exhaustive-deps": "warn", // flag missing useEffect deps
      "react/self-closing-comp": "warn", // <Foo></Foo> → <Foo />

      // — TypeScript —
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "error", // ban `any`
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ], // enforce `import type` for types

      // — General quality —
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error", // no unnecessary `let`
      "no-var": "error", // no legacy var
      eqeqeq: ["error", "always"], // === only
    },
  },
]);

export default eslintConfig;
