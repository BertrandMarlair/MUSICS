
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    extends: "@becode",
    "rules": {
        "unicorn/filename-case": ["error", {
            "case": "pascalCase"
        }],
        "no-extra-parens": 0,
        "react/jsx-max-depth": [ 3 , {
            "max": 6
        }],
        "react/jsx-no-literals": [ false , {
            "noStrings": true
        }],
    }
};