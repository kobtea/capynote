module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "env": {
        "browser": true,
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
    },
    "rules": {
        "semi": 2,
    },
};
