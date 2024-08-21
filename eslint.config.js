import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import unusedImports from "eslint-plugin-unused-imports";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      camelcase: "warn",
      eqeqeq: "warn",
      "init-declarations": "warn",
      "no-nested-ternary": "warn",
      "no-await-in-loop": "warn",
      "no-cond-assign": "warn",
      "no-const-assign": "warn",
      "no-constant-condition": "warn",
      "no-dupe-keys": "warn",
      "no-else-return": "warn",
      "no-empty": "warn",
      "no-empty-function": "warn",
      "no-ex-assign": "warn",
      "no-extra-boolean-cast": "warn",
      "no-fallthrough": "warn",
      "no-func-assign": "warn",
      "no-irregular-whitespace": "warn",
      "no-param-reassign": "warn",
      "no-parsing-error": "off",
      "no-return-await": "warn",
      "no-script-url": "warn",
      "no-self-assign": "warn",
      "no-self-compare": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unsafe-negation": "warn",
      "no-unused-expressions": "warn",
      "no-use-before-define": "warn",
      "no-useless-concat": "warn",
      "no-useless-return": "warn",
      "no-var": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      yoda: "warn",
    },
  }
);
