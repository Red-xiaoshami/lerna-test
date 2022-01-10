export const env = {
    browser: true,
    es2021: true,
};
export const extends = [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
];
export const parserOptions = {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
};
export const plugins = ["vue", "@typescript-eslint"];
export const rules = {};
