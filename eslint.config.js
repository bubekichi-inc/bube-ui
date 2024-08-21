import globals from "globals";

const config = [
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
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
      "no-empty-function": "error",
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
      "unused-imports/no-unused-imports": "warn",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            {
              pattern: "@/**",
              group: "parent",
              position: "before",
            },
          ],
          alphabetize: {
            order: "asc",
          },
          "newlines-between": "always",
        },
      ],
      "import/no-duplicates": "error",
    },
  },
];

export default config;
