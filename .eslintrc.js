module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        node: true
    },
    plugins: [
        "@typescript-eslint",
        "node",
        "import",
        "react",
        "react-hooks"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "google"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "max-len": "off",
        "require-jsdoc": "off",
        "quotes": ["error", "double"],
        "valid-jsdoc": "off",
        "import/extensions": ["error", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            scss: "always",
            json: "always"
        }]
    }
};
