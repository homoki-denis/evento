import nextPlugin from "@next/eslint-plugin-next";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const ignores = {
  ignores: [
    ".next/**/*",
    "out/**/*",
    "build/**/*",
    "dist/**/*",
    "node_modules/**/*",
    "src/generated/**/*",
    ".eslintcache",
    ".cache/**/*",
    "*.pem",
  ],
};

const nextConfig = {
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      project: "./tsconfig.json",
    },
  },
  settings: {
    next: {
      rootDir: ".",
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        allowSingleExtends: true,
      },
    ],
    "@typescript-eslint/no-unsafe-function-type": "off",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-this-alias": "error",
  },
};

export default [
  ignores,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  nextConfig,
];
